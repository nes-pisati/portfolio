
import ProjectHero from "../components/project/ProjectHero";
import Divisor from "../components/ui-kit/Divisor";
import ProjectDetails from "../components/project/ProjectDetails";
import ImagesGrid from "../components/project/ImagesGrid";
import ProjectInfo from "../components/project/ProjectInfo";

export default function Project() {
    return (
        <>
            <ProjectHero />
            <ProjectInfo />
            <Divisor text="About" />
            <ProjectDetails />
            <ImagesGrid />
        </>
    )
}