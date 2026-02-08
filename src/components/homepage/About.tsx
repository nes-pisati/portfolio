import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlackShade from "../ui-kit/BlackShade";

gsap.registerPlugin(ScrollTrigger);

const content = [
    {
        text: "I’m Vanessa, a 30-year-old frontend developer. According to Leonardo Di Caprio, I’m past my expiration date — but for code, I’m still in excellent shape.",
        img: "https://picsum.photos/400/400?random=1"
    },
    {
        text: " I’m still a Padawan? Yes, but I’m curious, fast-learning, and constantly leveling up (bugs included).",
        img: "https://picsum.photos/400/400?random=2"
    },
    {
        text: " My background in branding trained my eye long before my hands touched code, which means UI and UX naturally influence the way I build and think interfaces.",
        img: "https://picsum.photos/400/400?random=3"
    },
    {
        text: " I like clean components, thoughtful interactions, and frontend code that doesn’t fight back when you open it six months later.",
        img: "https://picsum.photos/400/400?random=4"
    },
    {
        text: " Constantly improving, mildly obsessed with polish, and never allergic to learning something new — but definitely allergic to graminaceae.",
        img: "https://picsum.photos/400/400?random=5"
    }
];

export default function About() {
    const container = useRef(null);
    const textsRef = useRef<(HTMLSpanElement | null)[]>([]);
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //         textsRef.current.forEach((text, i) => {
    //             const isFirst = i === 0;
    //             ScrollTrigger.create({
    //                 trigger: text,
    //                 start: isFirst ? "top top" : "top 10%",
    //                 end: "bottom 40%",
    //                 onEnter: () => {
    //                     gsap.to(text, { opacity: 1, duration: 0.5 });
    //                     gsap.to(imagesRef.current[i], { opacity: 1, zIndex: 10, duration: 0.5 });
    //                     imagesRef.current.forEach((img, j) => {
    //                         if (i !== j) {
    //                             gsap.to(img, { opacity: 0, zIndex: 1, duration: 0.5 });
    //                         }
    //                     });
    //                     textsRef.current.forEach((t, j) => {
    //                         if (i !== j) gsap.to(t, { opacity: 0.3, duration: 0.5 });
    //                     })
    //                 },
    //                 onEnterBack: () => {
    //                     gsap.to(text, { opacity: 1, duration: 0.5 });
    //                     gsap.to(imagesRef.current[i], { opacity: 1, zIndex: 10, duration: 0.5 });
    //                     textsRef.current.forEach((t, j) => {
    //                         if (i !== j) gsap.to(t, { opacity: 0.3, duration: 0.5 });
    //                     });
    //                     imagesRef.current.forEach((img, j) => {
    //                         if (i !== j) {
    //                             gsap.to(img, { opacity: 0, zIndex: 1, duration: 0.5 });
    //                         }
    //                     });
    //                 },
    //                 onLeave: () => {
    //                     gsap.to(text, { opacity: 0.3, duration: 0.5 });
    //                 },
    //                 onLeaveBack: () => {
    //                     gsap.to(text, { opacity: 0.3, duration: 0.5 });
    //                 },
    //             });
    //         });
    //     }, container);

    //     return () => ctx.revert();
    // }, []);

    return (
        <section ref={container} className="padding-x pt-10 grid grid-cols-5 gap-10 relative">
            <div className="col-span-3 flex flex-col pt-[10vh] max-h-[80vh]">
                <BlackShade>
                    <p className="about-text leading-tight">
                        {content.map((item, i) => (
                            <span
                                key={i}
                                ref={(el) => { textsRef.current[i] = el; }}
                                className=""
                            >
                                {item.text}
                            </span>
                        ))}
                    </p>
                </BlackShade>
            </div>
            <div className="col-span-2 relative h-screen sticky top-0 flex items-center justify-center">
                {content.map((item, i) => (
                    <img
                        key={i}
                        ref={(el) => { imagesRef.current[i] = el; }}
                        src={item.img}
                        alt=""
                        className={`absolute w-full h-auto max-w-md object-cover rounded-lg shadow-lg transition-opacity duration-500 ${i === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    />
                ))}
            </div>
        </section>
    );
}