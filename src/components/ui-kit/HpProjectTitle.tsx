import { useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap';

export default function HpProjectTitle({ title }: { title: string }) {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const lineRef = useRef<HTMLSpanElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const xTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
    const yTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

    const lineWidth = isMobile ? "10rem" : "15rem";

    const handleMouseEnter = useCallback(() => {
        gsap.to(lineRef.current, {
            width: lineWidth,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
        });
        gsap.to(divRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
        });
        gsap.to(imgRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
        });
        xTo.current = gsap.quickTo(imgRef.current, 'x', { duration: 0.4, ease: 'power3.out' });
        yTo.current = gsap.quickTo(imgRef.current, 'y', { duration: 0.4, ease: 'power3.out' });
    }, []);

    const handleMouseLeave = useCallback(() => {
        gsap.to(lineRef.current, {
            width: 0,
            opacity: 0.5,
            duration: 0.4,
            ease: 'power2.in',
        });
        gsap.to(divRef.current, {
            opacity: 0.5,
            duration: 0.4,
            ease: 'power2.in',
        });
        gsap.to(imgRef.current, {
            opacity: 0,
            scale: 0.8,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.in',
        });
        xTo.current = null;
        yTo.current = null;
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!divRef.current || !xTo.current || !yTo.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        xTo.current(x * 0.15);
        yTo.current(y * 0.3);
    }, []);

    return (
        <div
            className="relative flex items-end cursor-pointer opacity-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={divRef}
        >
            <div>
                <p className="hp-project-title">{title}</p>
            </div>

            <div
                ref={imgRef}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-10"
                style={{ opacity: 0, transform: 'translateX(-50%) scale(0.8)' }}
            >
                <img src="https://picsum.photos/200" alt="image" className='rounded-xl' />
            </div>

            <span ref={lineRef} className="border-b border-white h-8 ms-5 w-0 overflow-hidden"></span>

            <p className="hp-project-view ms-5">View</p>
        </div>
    )
}