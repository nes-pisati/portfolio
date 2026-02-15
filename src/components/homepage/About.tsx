import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BlackShade from "../ui-kit/BlackShade";

gsap.registerPlugin(ScrollTrigger);

const content = [
    {
        text: "I’m Vanessa, a 30-year-old frontend developer. According to Leonardo Di Caprio, I’m past my expiration date — but for code, I’m still in excellent shape. ",
        img: "https://picsum.photos/400/400?random=1"
    },
    {
        text: "I’m still a Padawan? Yes, but Anakin Skywalker was once one too and, like him, I'm constantly leveling up (bugs included).  ",
        img: "https://picsum.photos/400/400?random=2"
    },
    {
        text: "My background in branding trained my eye long before my hands touched code, which means UI and UX naturally influence the way I build and think interfaces. ",
        img: "https://picsum.photos/400/400?random=3"
    },
    {
        text: "I like clean components, thoughtful interactions, and frontend code that doesn’t fight back when you open it six months later (hopefully). ",
        img: "https://picsum.photos/400/400?random=4"
    },
    {
        text: "If you're wondering how I move within a team, I can only say this: this is how artificial intelligence feels working together with me. Need I say more?",
        img: "https://picsum.photos/400/400?random=5"
    }
];

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);
    const textsRef = useRef<(HTMLSpanElement | null)[]>([]);
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);



    return (
        <section ref={container} className="padding-x pt-10 gap-10 relative h-screen flex items-center">
            <div>
                <p className="about-text leading-tight">
                    I’m Vanessa, a 30-year-old frontend developer.
                    <br></br>According to Leonardo Di Caprio, I’m past my expiration date — but for code, I’m still in excellent shape.
                    I’m still a Padawan? Yes, but Anakin Skywalker was once one too and, like him, I'm constantly leveling up (bugs included).
                    <br></br>My background in branding trained my eye long before my hands touched code, which means UI and UX naturally influence the way I build and think interfaces.
                    I like clean components, thoughtful interactions, and frontend code that doesn’t fight back when you open it six months later (hopefully).
                </p>
            </div>
        </section>
    );
}
