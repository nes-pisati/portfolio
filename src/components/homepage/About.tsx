import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const content = [
    {
        text: "I'm Vanessa, a 30-year-old frontend developer. According to Leonardo Di Caprio, I'm past my expiration date — but for code, I'm still in excellent shape. ",
        img: "https://picsum.photos/400/400?random=1"
    },
    {
        text: "I'm still a Padawan? Yes, but every Jedi was once one too and with a great Jedi Master by my side I continue improving in the use of the force and constantly leveling up (bugs included). ",
        img: "https://picsum.photos/400/400?random=2"
    },
    {
        text: "My background in branding trained my eye long before my hands touched code, which means UI and UX naturally influence the way I build and think interfaces. ",
    },
    {
        text: "I like clean components, thoughtful interactions, and frontend code that doesn't fight back when you open it six months later (hopefully). ",
    },
    {
        text: "If you're wondering how I move within a team, I can only say this: this is how artificial intelligence feels working together with me. Need I say more?",
        img: "https://picsum.photos/400/400?random=5"
    }
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

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
