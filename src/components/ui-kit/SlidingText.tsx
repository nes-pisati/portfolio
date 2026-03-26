import BlackShade from "./BlackShade";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SlidingText() {
    useGSAP(() => {
        const tl = gsap.timeline({
            delay: 3,
        });

        tl.fromTo(".sliding-text",
            {
                y: 100,
                opacity: 0,
                rotateX: -90,
            },
            {
                y: 0,
                opacity: 0.5,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out",
            }
        );

        tl.to(".sliding-text-container", {
            yPercent: -50,
            duration: 10,
            ease: "none",
            repeat: -1,
        });
    });

    const words = Array(5).fill("FRONTEND DEVELOPER");

    return (
        <>
            <BlackShade>
                <div className="relative overflow-hidden bg-yellow h-[15vh] md:h-[45vh] md:opacity-40 opacity-20">
                    <div className="sliding-text-container bg-pink">
                        {words.map((word, i) => (
                            <p key={`orig-${i}`} className="sliding-text">{word}</p>
                        ))}
                        {words.map((word, i) => (
                            <p key={`dup-${i}`} className="sliding-text">{word}</p>
                        ))}
                    </div>
                </div>
            </BlackShade>
        </>
    )
}