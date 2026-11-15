import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import cvEng from "../../assets/CV-EN-PisatiVanessa.pdf";
import cvIta from "../../assets/CV-ITA-PisatiVanessa.pdf";

interface MenuProps {
    backEnabled?: boolean;
}

export default function Menu({ backEnabled }: MenuProps) {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const handleNavigateBack = () => {
        navigate('/home');
    }

    const isItalian = i18n.language.startsWith('it');
    const cvUrl = isItalian ? cvIta : cvEng;
    const cvFileName = isItalian ? "CV-ITA-PisatiVanessa.pdf" : "CV-EN-PisatiVanessa.pdf";

    return (
        <>
            <div className="py-6 flex justify-between items-center">
                <div>
                    {backEnabled &&
                        <p className="menu-item" onClick={handleNavigateBack}>&lt; {t("goBack")}</p>
                    }
                </div>
                <ul className="flex justify-end items-center gap-10">
                    <li className="list-none">
                        <a
                            href={cvUrl}
                            download={cvFileName}
                            className="menu-item block"
                        >
                            {t("downloadCv")}
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}