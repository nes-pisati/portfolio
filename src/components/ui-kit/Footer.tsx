import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    const [isHoveredEmail, setIsHoveredEmail] = useState(false);

    const email = "pisati.vanessa@gmail.com";
    const github = "https://github.com/nes-pisati";
    const linkedin = "https://www.linkedin.com/in/nes-pisati";

    return (
        <footer className="padding-x py-10">
            <p className="section-title">{t("contacts.title")}</p>
            <ul className="flex justify-between pt-20 pb-10">
                <li className="transition-all duration-300">
                    <a
                        href={`mailto:${email}`}
                        onMouseEnter={() => setIsHoveredEmail(true)}
                        onMouseLeave={() => setIsHoveredEmail(false)}
                        className="grid place-items-start"
                    >
                        <span className="invisible row-start-1 col-start-1 pointer-events-none">
                            {email}
                        </span>
                        <span className="row-start-1 col-start-1">
                            {isHoveredEmail ? email : ".Email"}
                        </span>
                    </a>
                </li>
                <li>
                    <a href={github} target="_blank" rel="noopener noreferrer">.GitHub</a>
                </li>
                <li>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">.LinkedIn</a>
                </li>
            </ul>
        </footer>
    )
}