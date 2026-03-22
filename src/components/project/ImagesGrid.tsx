import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ImagesGrid({ images }: { images: string[] }) {

    useGSAP(() => {

        const gridImages = gsap.utils.toArray(".grid-image")

        gsap.set(gridImages, {
            opacity: 0,
            y: 60,
            scale: 1.05
        })

        gsap.to(gridImages, {
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
                {images[0] && (
                    <img
                        src={images[0]}
                        alt="Project foto 1"
                        className="images-grid-left-img grid-image"
                    />
                )}
            </div>

            <div className="images-grid-right-col">
                <div className="images-grid-right-inner">

                    <div className="images-grid-full-span">
                        {images[1] && (
                            <img
                                src={images[1]}
                                alt="Project foto 2"
                                className="images-grid-top-img grid-image"
                            />
                        )}
                    </div>

                    <div className="images-grid-full-span">
                        <div className="images-grid-bottom-row">

                            {images[2] && (
                                <img
                                    src={images[2]}
                                    alt="Project foto 3"
                                    className="images-grid-bottom-img-1 grid-image"
                                />
                            )}

                            {images[3] && (
                                <img
                                    src={images[3]}
                                    alt="Project foto 4"
                                    className="images-grid-bottom-img-2 grid-image"
                                />
                            )}

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
