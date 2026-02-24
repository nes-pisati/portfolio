import HpProjectTitle from "../ui-kit/HpProjectTitle";

export default function Projects() {
    return (
        <section className="padding-x py-30">
            <p className="section-title">Projects</p>
            <div className="flex justify-center">
                <div className="py-10 flex flex-col md:justify-center items-center gap-10 w-200">
                    <div className="flex md:flex-row flex-col md:items-center items-starts gap-10">
                        <HpProjectTitle title="Modì" />
                        <HpProjectTitle title="Antidea" />
                    </div>
                    <div>
                        <HpProjectTitle title="Iron Jiu Jitsu" />
                    </div>
                </div>
            </div>
        </section>
    )
}