import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ProjectDetails() {

    useGSAP(() => {

        const titleSplit = new SplitText(".project-detail-title", { type: "lines", linesClass: "line" })
        const descriptionSplit = new SplitText(".project-detail-description", { type: "lines", linesClass: "line" })
        const techSplit = new SplitText(".tech-description", { type: "lines", linesClass: "line" })

        gsap.set([...titleSplit.lines, ...descriptionSplit.lines, ...techSplit.lines], {
            yPercent: 100,
            opacity: 0
        })

        gsap.set(".project-details-img", {
            opacity: 0,
            scale: 1.1,
            y: 80
        })

        const firstTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".project-details-section",
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        })

        firstTl.to(titleSplit.lines, {
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "none"
        })

        firstTl.to(descriptionSplit.lines, {
            yPercent: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "none"
        }, "-=0.3")

        firstTl.to(".project-details-img", {
            opacity: 0.25,
            scale: 1,
            y: 0,
            ease: "none"
        })

    })

    return (
        <section className="project-details-section">
            <div className="project-details-content">
                <div>
                    <h2 className="project-detail-title">Antidea</h2>
                    <p className="project-detail-description">
                        Project Description
                    </p>
                </div>

                <div>
                    <p className="tech-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto quaerat quibusdam ipsam in quae odio, laborum veritatis dolorum pariatur delectus aperiam, aspernatur eius! Quis, itaque. Expedita architecto quaerat quibusdam ipsam in quae odio, laborum veritatis dolorum pariatur delectus aperiam, aspernatur eius! Quis, itaque.
                    </p>
                </div>
            </div>

            <div>
                <img
                    src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop"
                    alt="Project foto"
                    className="project-details-img"
                />
            </div>
        </section>
    )
}
