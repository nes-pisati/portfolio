import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ProjectDetails({ name, descriptionText, descriptionImg }: { name: string, descriptionText: string, descriptionImg: string }) {

    useGSAP(() => {
        const mm = gsap.matchMedia()


        mm.add("(min-width: 1024px)", () => {

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

            firstTl.to(techSplit.lines, {
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

        mm.add("(max-width: 1023px)", () => {
            const titleSplit = new SplitText(".project-detail-title", { type: "lines", linesClass: "line" })
            const techSplit = new SplitText(".tech-description", { type: "lines", linesClass: "line" })

            gsap.set([...titleSplit.lines, ...techSplit.lines], {
                yPercent: 100,
                opacity: 0
            })

            gsap.set(".project-details-img", {
                opacity: 0,
                y: 40
            })

            gsap.to(titleSplit.lines, {
                yPercent: 0,
                opacity: 1,
                stagger: 0.08,
                ease: "power2.out",
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".project-detail-title",
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            })

            gsap.to(".project-details-img", {
                opacity: 0.25,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".project-details-img",
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            })

            gsap.to(techSplit.lines, {
                yPercent: 0,
                opacity: 1,
                stagger: 0.05,
                ease: "power2.out",
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".tech-description",
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            })
        })

        return () => mm.revert()

    })

    return (
        <section className="project-details-section">
            <div className="project-details-content">
                <h2 className="project-detail-title">{name}</h2>

                <p className="tech-description">
                    {descriptionText}
                </p>
            </div>

            <img
                src={descriptionImg}
                alt="Project foto"
                className="project-details-img "
            />
        </section>
    )
}
