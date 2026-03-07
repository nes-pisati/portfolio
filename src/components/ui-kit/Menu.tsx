import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface MenuProps {
    backEnabled?: boolean;
}

export default function Menu({ backEnabled }: MenuProps) {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleNavigateBack = () => {
        navigate('/home');
    }
    return (
        <>
            <div className="py-6 flex justify-between items-center">
                <div>
                    {backEnabled &&
                        <p className="menu-item" onClick={handleNavigateBack}>&lt; {t("goBack")}</p>
                    }
                </div>
                <ul className="flex justify-end items-center gap-10">
                    <li className="menu-item">{t("downloadCv")}</li>
                </ul>
            </div>
        </>
    )
}