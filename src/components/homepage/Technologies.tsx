import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

export default function Technologies() {

    useGSAP(() => {
        const textSplit = new SplitText('#description', { type: 'lines' });
        const frameworksSplit = new SplitText('#frameworks', { type: 'lines' });
        const languagesSplit = new SplitText('#languages', { type: 'lines' });

        const firstTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#technologies",
                start: "top 50%",
                end: "top top",
                scrub: 1,
            }
        })

        firstTl
            .from(".section-title", {
                opacity: 0,
                yPercent: 20,
                duration: 0.1,
                ease: "power2.out"
            })
            .from(textSplit.lines, {
                opacity: 0,
                y: 20,
                duration: 0.1,
                ease: "power2.out",
                stagger: 0.1,
                delay: 1
            })

        const secondTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#technologies",
                start: "top top",
                end: "+110%",
                scrub: 1,
                pin: true
            }
        })

        secondTl
            .from(frameworksSplit.lines, {
                opacity: 0,
                y: 20,
                duration: 0.1,
                ease: "expo.out",
                stagger: 0.06,
                delay: 0.5
            })
            .from(".framework-item", {
                opacity: 0,
                y: 20,
                duration: 0.1,
                ease: "expo.out",
                stagger: 0.1
            })
            .from(languagesSplit.lines, {
                opacity: 0,
                y: 20,
                duration: 0.1,
                ease: "expo.out",
                stagger: 0.06,
                delay: 1
            })
            .from("#languages li", {
                opacity: 0,
                y: 20,
                duration: 0.1,
                ease: "expo.out",
                stagger: 0.1
            })
            .from(".tools-item", {
                opacity: 0,
                y: 20,
                duration: 0.1,
                ease: "expo.out",
                stagger: 0.06,
                delay: 1
            })

    })

    return (
        <section id="technologies" className="padding-x py-10 h-screen md:mb-0 mb-20">
            <h2 className="section-title">Technologies</h2>
            <p id="description" className="tech-description py-10">I'm a frontend developer who enjoys building interfaces that are clean, functional, and easy to maintain. My stack is centered around JavaScript, React, and modern tooling, but I'm always open to learning new languages and frameworks.</p>
            <div className="md:grid grid-cols-4 gap-10 py-10">
                <div className="col-span-1 flex justify-between md:block">
                    <div id="frameworks">
                        <p className="tech-title">Frame<br></br>works</p>
                        <ul className="pt-10">
                            <li className="tech-description framework-item">Angular</li>
                            <li className="tech-description framework-item">React</li>
                            <li className="tech-description framework-item">React Native</li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <ul className="pt-10">
                            <li className="tech-description tools-item">Html</li>
                            <li className="tech-description tools-item">CSS</li>
                            <li className="tech-description tools-item">Sass</li>
                            <li className="tech-description tools-item">Tailwind</li>
                            <li className="tech-description tools-item">Gsap</li>
                            <li className="tech-description tools-item">Node JS</li>
                            <li className="tech-description tools-item">Mongo DB</li>
                        </ul>
                    </div>
                </div>
                <div id="languages" className="col-span-2 md:pt-0 pt-10">
                    <p className="tech-title">Languages</p>
                    <ul className="pt-10">
                        <li className="tech-description">TypeScript</li>
                        <li className="tech-description">JavaScript</li>
                    </ul>
                </div>
                <div className="col-span-1 hidden md:block">
                    <ul className="pt-10">
                        <li className="tech-description tools-item">Html</li>
                        <li className="tech-description tools-item">CSS</li>
                        <li className="tech-description tools-item">Sass</li>
                        <li className="tech-description tools-item">Tailwind</li>
                        <li className="tech-description tools-item">Gsap</li>
                        <li className="tech-description tools-item">Node JS</li>
                        <li className="tech-description tools-item">Mongo DB</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}