export default function ProjectInfo() {
    return (
        <section className="flex flex-col justify-between py-40 h-screen">
            <div className="flex justify-between opacity-50">
                <p className="divisor-text">DETAILS</p>
                <p className="underline">Website Development</p>
            </div>
            <div className="flex justify-between opacity-50">
                <p className="divisor-text">TECHNOLOGIES</p>
                <div className="flex flex-col items-end gap-10">
                    <p className="underline">React</p>
                    <p className="underline">Html</p>
                    <p className="underline">Css</p>
                    <p className="underline">Javascript</p>
                </div>
            </div>
            <div className="flex justify-between opacity-50">
                <p className="divisor-text">SEE MORE</p>
                <p className="underline">Website Development</p>
            </div>
        </section>
    )
}