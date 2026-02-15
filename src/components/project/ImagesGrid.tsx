import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ImagesGrid() {

    useGSAP(() => {

        const images = gsap.utils.toArray(".grid-image")

        gsap.set(images, {
            opacity: 0,
            y: 60,
            scale: 1.05
        })

        gsap.to(images, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".images-grid-section",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        })

    }, [])

    return (
        <section className="images-grid-section">

            <div className="images-grid-left-col">
                <img
                    src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop"
                    alt="Project foto"
                    className="images-grid-left-img grid-image"
                />
            </div>

            <div className="images-grid-right-col">
                <div className="images-grid-right-inner">

                    <div className="images-grid-full-span">
                        <img
                            src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop"
                            alt="Project foto"
                            className="images-grid-top-img grid-image"
                        />
                    </div>

                    <div className="images-grid-full-span">
                        <div className="images-grid-bottom-row">

                            <img
                                src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop"
                                alt="Project foto"
                                className="images-grid-bottom-img-1 grid-image"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop"
                                alt="Project foto"
                                className="images-grid-bottom-img-2 grid-image"
                            />

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
