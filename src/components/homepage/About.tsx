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

        gsap.set(items[0], { opacity: 1, y: 0 });
        gsap.set(items[0].querySelector(".about-item-img"), { opacity: 1, y: 0 });

        const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${content.length * 80}%`,
                scrub: 0.6,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Indicatore di scroll: sparisce appena si inizia a scorrere
        tl.to(".about-scroll-hint", { opacity: 0, y: 20, duration: 0.5 }, 0);

        items.forEach((item, index) => {
            const img = item.querySelector(".about-item-img");
            const isFirst = index === 0;
            const isLast = index === items.length - 1;

            if (!isFirst) {
                // Entra solo dopo che il precedente è scomparso del tutto
                tl.fromTo(item,
                    { opacity: 0, y: 60 },
                    { opacity: 1, y: 0, duration: 1 },
                    ">"
                );

                if (img) {
                    tl.fromTo(img,
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 1 },
                        "<0.2"
                    );
                }
            }

            tl.to({}, { duration: 1.2 });

            if (!isLast) {
                tl.to(item, { opacity: 0, y: -60, duration: 1 });
            }
        });

        tl.to(".about-progress-bar", { scaleX: 1, duration: tl.duration() }, 0);

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

                <div className="about-scroll-hint">
                    <span>{t("about.scroll")}</span>
                    <span className="about-scroll-line" />
                </div>

                <div className="about-progress">
                    <div className="about-progress-bar" />
                </div>
            </div>
        </section>
    );
}
