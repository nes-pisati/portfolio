"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface DivisorProps {
    text: string
}

export default function Divisor({ text }: DivisorProps) {
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = contentRef.current
        if (!el) return

        const ctx = gsap.context(() => {
            gsap.to(el, {
                xPercent: -50,
                ease: "none",
                duration: 60,
                repeat: -1,
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="divisor-section">
            <div className="divisor-content" ref={contentRef}>
                {Array.from({ length: 100 }).map((_, i) => (
                    <p key={i} className="divisor-text">
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}
