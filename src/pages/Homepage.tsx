import About from "../components/homepage/About";
import Hero from "../components/homepage/Hero";
import Projects from "../components/homepage/Projects";
import Technologies from "../components/homepage/Technologies";
import Divisor from "../components/ui-kit/Divisor";

export default function Homepage() {
    return (
        <>
            <Hero />
            <Divisor text="About" />
            <About />
            <Technologies />
            <Divisor text="Projects" />
            <Projects />
        </>
    )
}