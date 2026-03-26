import { useRef } from "react";
import HpProjectTitle from "../ui-kit/HpProjectTitle";
import modi_main from "../../assets/projects/modi/modi_main.jpg"
import antidea_main from "../../assets/projects/antidea/antidea_main.jpg"
import ijj_main from "../../assets/projects/iron-jiu-jitsu/ijj_main.jpg"
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".project-item", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="px-6 md:px-20 py-30 mb-20">
            <p className="section-title mb-10">{t("projects.title")}</p>
            <div className="flex justify-center">
                <div className="py-10 flex flex-col md:justify-center items-center gap-10 w-full max-w-4xl">
                    <div className="flex md:flex-row flex-col md:items-center items-start gap-10 w-full justify-center">
                        <div className="project-item">
                            <HpProjectTitle title="Modì" image={modi_main} slug="modi" />
                        </div>
                        <div className="project-item">
                            <HpProjectTitle title="Antidea" image={antidea_main} slug="antidea" />
                        </div>
                    </div>
                    <div className="project-item self-start md:self-center">
                        <HpProjectTitle title="Iron Jiu Jitsu" image={ijj_main} slug="iron-jiu-jitsu" />
                    </div>
                </div>
            </div>
        </section>
    )
}