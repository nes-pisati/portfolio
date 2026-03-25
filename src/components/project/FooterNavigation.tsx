import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../../data/projects";

export default function FooterNavigation() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { slug } = useParams<{ slug: string }>();
    const currentProjectIndex = projects.findIndex((project) => project.slug === slug);

    const handleNavigateBack = () => {
        navigate('/home');
    }

    const handleNavigateNext = () => {
        if (currentProjectIndex !== -1) {
            const nextIndex = (currentProjectIndex + 1) % projects.length;
            const nextProject = projects[nextIndex];
            navigate(`/project/${nextProject.slug}`);
            window.scrollTo(0, 0);
        }
    }

    return (
        <div className="py-10 md:py-20">
            <div className="flex justify-between">
                <div className="flex">
                    <p className="menu-item" onClick={handleNavigateBack}>&lt; {t("goBack")}</p>
                </div>
                <div className="flex">
                    <p className="menu-item" onClick={handleNavigateNext}>{t("goNext")} &gt;</p>
                </div>
            </div>
        </div>
    );
}