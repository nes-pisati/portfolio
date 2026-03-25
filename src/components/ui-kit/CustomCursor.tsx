import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest("a, button, .cursor-pointer, .project-item");

            if (isInteractive) {
                gsap.to(cursor, {
                    scale: 3.5,
                    duration: 0.4,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    mixBlendMode: "difference",
                    ease: "power3.out"
                });
            } else {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.4,
                    backgroundColor: "white",
                    mixBlendMode: "difference",
                    ease: "power3.out"
                });
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-7 h-7 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block will-change-transform"
        />
    );
}
