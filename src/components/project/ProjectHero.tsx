import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ProjectHero() {

    const sectionRef = useRef(null)

    useGSAP(() => {

        const mm = gsap.matchMedia()

        mm.add("(min-width: 1024px)", () => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true
                }
            })

            tl.to(".project-hero-img", {
                clipPath: "inset(0% 0% 75% 0%)",
                ease: "none"
            })

            tl.fromTo(".project-hero-name",
                { x: window.innerWidth },
                { x: -window.innerWidth * 0.15, ease: "power2.out" },
                "+=0.2"
            )

        })


        mm.add("(max-width: 1023px)", () => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true
                }
            })

            tl.to(".project-hero-img", {
                clipPath: "inset(0% 0% 20% 0%)",
                ease: "none"
            })

            tl.fromTo(".project-hero-name",
                { x: window.innerWidth },
                { x: -window.innerWidth * 0.001, ease: "power2.out" },
                "+=0.2"
            )

        })


        return () => mm.revert()

    }, [])

    return (
        <section ref={sectionRef} className="project-hero-section">

            <div className="project-hero-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1770297345695-f7ca76dfb04d?q=80&w=2070&auto=format&fit=crop"
                    alt="project hero"
                    className="project-hero-img"
                />
            </div>

            <h1 className="project-hero-name">
                ANTIDEA
            </h1>

        </section>
    )
}
