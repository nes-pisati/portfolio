import HpProjectTitle from "../ui-kit/HpProjectTitle";

export default function Projects() {
    return (
        <section className="padding-x py-10">
            <p className="section-title">Projects</p>
            <div className="flex justify-center">
                <div className="py-10 flex flex-wrap justify-center items-center gap-10 max-w-200">
                    <HpProjectTitle title="Modì" />
                    <HpProjectTitle title="Antidea" />
                    <HpProjectTitle title="Iron Jiu Jitsu" />
                </div>
            </div>
        </section>
    )
}