import HpProjectTitle from "../ui-kit/HpProjectTitle";
import modi_main from "../../assets/projects/modi/modi_main.jpg"
import antidea_main from "../../assets/projects/antidea/antidea_main.jpg"
import ijj_main from "../../assets/projects/iron-jiu-jitsu/ijj_main.jpg"
import { useTranslation } from "react-i18next";

export default function Projects() {

    const { t } = useTranslation();
    return (
        <section className="padding-x py-30">
            <p className="section-title">{t("projects.title")}</p>
            <div className="flex justify-center">
                <div className="py-10 flex flex-col md:justify-center items-center gap-10 w-200">
                    <div className="flex md:flex-row flex-col md:items-center items-starts gap-10">
                        <HpProjectTitle title="Modì" image={modi_main} slug="modi" />
                        <HpProjectTitle title="Antidea" image={antidea_main} slug="antidea" />
                    </div>
                    <div>
                        <HpProjectTitle title="Iron Jiu Jitsu" image={ijj_main} slug="iron-jiu-jitsu" />
                    </div>
                </div>
            </div>
        </section>
    )
}