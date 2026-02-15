export default function ProjectInfo() {
    return (
        <section className="project-info-section">
            <div className="project-info-row">
                <p>DETAILS</p>
                <p className="underline md:text-base text-xs">Website Development</p>
            </div>
            <div className="project-info-row">
                <p>TECHNOLOGIES</p>
                <div className="project-info-technologies">
                    <p className="underline md:text-base text-xs">React</p>
                    <p className="underline md:text-base text-xs">Html</p>
                    <p className="underline md:text-base text-xs">Css</p>
                    <p className="underline md:text-base text-xs">Javascript</p>
                </div>
            </div>
            <div className="project-info-row">
                <p>SEE MORE</p>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                    <p className="underline md:text-base text-xs">Visit Website</p>
                    <p className="underline md:text-base text-xs">View Code</p>
                    <p className="underline md:text-base text-xs">Project Playlist</p>
                </div>

            </div>
        </section>
    )
}