import { useTranslation } from "react-i18next";

interface ProjectInfoProps {
    details: string;
    technologies: string[];
    furtherTechnologies?: string[];
    repoUrl?: string;
    frontendRepoUrl?: string;
    backendRepoUrl?: string;
    liveUrl?: string;
}

export default function ProjectInfo({ details, technologies, furtherTechnologies, repoUrl, frontendRepoUrl, backendRepoUrl, liveUrl }: ProjectInfoProps) {
    const { t } = useTranslation();

    return (
        <section className="project-info-section">
            <div className="project-info-row">
                <span>{t("projects.info.details")}</span>
                <span className="underline md:text-base text-xs">{details}</span>
            </div>

            <div className={furtherTechnologies && furtherTechnologies.length > 0 ? "flex flex-col md:flex-row gap-5 md:gap-10" : ""}>
                <div className="project-info-row">
                    <span>{t("projects.info.technologies")}</span>
                    <div className="project-info-technologies">
                        {technologies.map((tech, index) => (
                            <span key={index} className="underline md:text-base text-xs">{tech}</span>
                        ))}
                    </div>
                </div>
                {furtherTechnologies && furtherTechnologies.length > 0 && (
                    <div className="project-info-row-further-technologies">
                        <span>{t("projects.info.furtherTechnologies")}</span>
                        <div className="project-info-technologies">
                            {furtherTechnologies.map((tech, index) => (
                                <span key={index} className="underline md:text-base text-xs">{tech}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="project-info-row">
                <span>{t("projects.info.seeMore")}</span>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                    {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">{t("projects.info.visitWebsite")}</a>}
                    {repoUrl && <a href={repoUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">{t("projects.info.viewCode")}</a>}
                    {frontendRepoUrl && <a href={frontendRepoUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">{t("projects.info.frontendRepoUrl")}</a>}
                    {backendRepoUrl && <a href={backendRepoUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">{t("projects.info.backendRepoUrl")}</a>}
                    {/* <p className="underline md:text-base text-xs">Project Playlist</p> */}
                </div>

            </div>
        </section>
    )
}
