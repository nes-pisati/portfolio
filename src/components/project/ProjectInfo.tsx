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
    return (
        <section className="project-info-section">
            <div className="project-info-row">
                <p>DETAILS</p>
                <p className="underline md:text-base text-xs">{details}</p>
            </div>

            <div className={furtherTechnologies && furtherTechnologies.length > 0 ? "flex flex-col md:flex-row gap-5 md:gap-10" : ""}>
                <div className="project-info-row">
                    <p>TECHNOLOGIES</p>
                    <div className="project-info-technologies">
                        {technologies.map((tech, index) => (
                            <p key={index} className="underline md:text-base text-xs">{tech}</p>
                        ))}
                    </div>
                </div>
                {furtherTechnologies && furtherTechnologies.length > 0 && (
                    <div className="project-info-row-further-technologies">
                        <p>FURTHER TECHNOLOGIES</p>
                        <div className="project-info-technologies">
                            {furtherTechnologies.map((tech, index) => (
                                <p key={index} className="underline md:text-base text-xs">{tech}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="project-info-row">
                <p>SEE MORE</p>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                    {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">Visit Website</a>}
                    {repoUrl && <a href={repoUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">View Code</a>}
                    {frontendRepoUrl && <a href={frontendRepoUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">View Frontend Code</a>}
                    {backendRepoUrl && <a href={backendRepoUrl} target="_blank" rel="noreferrer" className="underline md:text-base text-xs">View Backend Code</a>}
                    {/* <p className="underline md:text-base text-xs">Project Playlist</p> */}
                </div>

            </div>
        </section>
    )
}