import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import bandieraIT from '../assets/italiano.png';
import bandieraEN from '../assets/inglese.svg';

export default function Intro() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".intro-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.to(".bg-glow", {
                opacity: 0.3,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleLanguageSelect = async (lang: string) => {
        gsap.to(contentRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                i18n.changeLanguage(lang).then(() => navigate('/home'));
            }
        });
    };

    return (
        <section ref={sectionRef} className="fixed inset-0 z-50 flex flex-col justify-center items-center overflow-hidden bg-black touch-action-none overscroll-none" style={{ touchAction: 'none', overscrollBehavior: 'none' }}>
            <div className="bg-glow absolute w-[min(500px,100vw)] h-[min(500px,100vh)] bg-blue-500/20 rounded-full blur-[120px] -z-10 opacity-0" />

            <div ref={contentRef} className="flex flex-col items-center gap-8 md:gap-10">
                <div className="intro-item">
                    <p className="intro-text">Select Language</p>
                </div>

                <div className="flex gap-6 intro-item">
                    <button
                        onClick={() => handleLanguageSelect('it')}
                        className="group relative w-15 md:w-20 h-10 md:h-12 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-500"
                    >
                        <img src={bandieraIT} alt="Italiano" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </button>

                    <button
                        onClick={() => handleLanguageSelect('en')}
                        className="group relative w-15 md:w-20 h-10 md:h-12 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-500"
                    >
                        <img src={bandieraEN} alt="English" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </button>
                </div>
            </div>
        </section>
    );
}