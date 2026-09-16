import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ImagesGrid({ images }: { images: string[] }) {

    const trackRef = useRef<HTMLDivElement>(null)
    const dragRef = useRef({ active: false, moved: false, startX: 0, startScroll: 0 })
    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(false)

    useGSAP(() => {

        const slides = gsap.utils.toArray(".slideshow-image")

        gsap.set(slides, {
            opacity: 0,
            y: 60,
            scale: 1.05
        })

        gsap.to(slides, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slideshow-section",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        })

    }, [])

    const updateArrows = () => {
        const track = trackRef.current
        if (!track) return
        setCanPrev(track.scrollLeft > 1)
        setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1)
    }

    useEffect(() => {
        updateArrows()
        window.addEventListener("resize", updateArrows)
        return () => window.removeEventListener("resize", updateArrows)
    }, [images])

    const scrollBySlide = (direction: 1 | -1) => {
        const track = trackRef.current
        if (!track) return

        const slides = Array.from(track.children) as HTMLElement[]
        const current = track.scrollLeft
        const offsets = slides.map(slide => slide.offsetLeft - track.offsetLeft)

        const target = direction === 1
            ? offsets.find(offset => offset > current + 1)
            : [...offsets].reverse().find(offset => offset < current - 1)

        track.scrollTo({ left: target ?? (direction === 1 ? track.scrollWidth : 0), behavior: "smooth" })
    }

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || !trackRef.current) return
        dragRef.current = { active: true, moved: false, startX: e.clientX, startScroll: trackRef.current.scrollLeft }
    }

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragRef.current
        const track = trackRef.current
        if (!drag.active || !track) return

        const delta = e.clientX - drag.startX
        if (!drag.moved && Math.abs(delta) > 5) {
            drag.moved = true
            track.classList.add("is-dragging")
            track.setPointerCapture(e.pointerId)
        }
        if (drag.moved) track.scrollLeft = drag.startScroll - delta
    }

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        const track = trackRef.current
        if (!dragRef.current.active || !track) return
        dragRef.current.active = false
        track.classList.remove("is-dragging")
        if (track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId)
    }

    return (
        <section className="slideshow-section">

            <div
                ref={trackRef}
                className="slideshow-track"
                onScroll={updateArrows}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                {images.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`Project foto ${index + 1}`}
                        className="slideshow-image"
                        draggable={false}
                        onLoad={updateArrows}
                    />
                ))}
            </div>

            <div className="slideshow-controls">
                <button
                    type="button"
                    aria-label="Previous image"
                    className="slideshow-button"
                    onClick={() => scrollBySlide(-1)}
                    disabled={!canPrev}
                >
                    ←
                </button>
                <button
                    type="button"
                    aria-label="Next image"
                    className="slideshow-button"
                    onClick={() => scrollBySlide(1)}
                    disabled={!canNext}
                >
                    →
                </button>
            </div>

        </section>
    )
}
