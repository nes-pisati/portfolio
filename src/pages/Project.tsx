
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projects, type Project } from "../data/projects";
import ProjectHero from "../components/project/ProjectHero";
import Divisor from "../components/ui-kit/Divisor";
import ProjectDetails from "../components/project/ProjectDetails";
import ImagesGrid from "../components/project/ImagesGrid";
import ProjectInfo from "../components/project/ProjectInfo";
import FooterNavigation from "../components/project/FooterNavigation";



export default function Project() {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useTranslation();
    const project = (projects as Project[]).find(p => p.slug === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    const projectT = t(`projects:${slug}`, { returnObjects: true }) as any;

    return (
        <div key={slug}>
            <ProjectHero name={projectT.name} cover={project.cover} />
            <ProjectInfo
                details={projectT.details}
                technologies={project.technologies}
                furtherTechnologies={project.furtherTechnologies}
                repoUrl={project.repoUrl}
                frontendRepoUrl={project.frontendRepoUrl}
                backendRepoUrl={project.backendRepoUrl}
                liveUrl={project.liveUrl}
            />
            <Divisor text={t("aboutProject")} />
            <ProjectDetails
                name={projectT.name}
                descriptionText={projectT.descriptionText}
                descriptionImg={project.descriptionImg}
            />
            <ImagesGrid images={project.images} />
            <FooterNavigation />
        </div>
    )
}