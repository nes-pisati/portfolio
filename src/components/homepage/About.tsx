import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import vanessa from "../../assets/vanessa.jpg"
import ai from "../../assets/ai.jpg"
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    const content = [
        {
            text: t("about.content.text1"),
            img: vanessa
        },
        {
            text: t("about.content.text2"),
        },
        {
            text: t("about.content.text4"),
        },
        {
            text: t("about.content.text5"),
        },
        {
            text: t("about.content.text6"),
            img: ai
        }
    ];


    useGSAP(() => {
        if (!containerRef.current) return;

        const items = gsap.utils.toArray<HTMLElement>(".about-item");
        if (items.length === 0) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${content.length * 80}%`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        items.forEach((item) => {
            const img = item.querySelector(".about-item-img");

            tl.to(item, {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            });

            if (img) {
                tl.to(img, {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, ">-0.2");
            }

            tl.to({}, { duration: 1.5 });

            tl.to(item, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut"
            });
        }, containerRef);

    }, { scope: containerRef });

    return (
        <section
            id="about"
            ref={containerRef}
            className="about-section"
        >
            <div ref={innerRef} className="about-inner">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="about-item"
                    >
                        <p className="about-item-text about-text leading-tight">
                            {item.text}
                        </p>
                        {item.img && (
                            <img
                                src={item.img}
                                alt=""
                                className="about-item-img"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
