export default function HpProjectTitle({ title }: { title: string }) {
    return (
        <div className="flex items-end">
            <div>
                <p className="hp-project-title">{title}</p>
            </div>
            <div className="border-b border-white h-8 ms-5 flex justify-end">
                <p className="hp-project-view">View</p>
            </div>
        </div>
    )
}