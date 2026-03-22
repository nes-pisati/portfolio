import About from "../components/homepage/About";
import Hero from "../components/homepage/Hero";
import Projects from "../components/homepage/Projects";
import Technologies from "../components/homepage/Technologies";
import Divisor from "../components/ui-kit/Divisor";
import { useTranslation } from "react-i18next";

export default function Homepage() {
    const { t } = useTranslation();
    return (
        <>
            <Hero />
            <Divisor text={t("about.title")} />
            <About />
            <Technologies />
            <Divisor text={t("projects.title")} />
            <Projects />
        </>
    )
}