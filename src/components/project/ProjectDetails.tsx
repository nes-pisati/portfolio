export default function ProjectDetails() {
    return (
        <section className="grid grid-cols-2 gap-20 py-10">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="project-detail-title">Antidea</h2>
                    <p>Project Description</p>
                </div>
                <div>
                    <p className="tech-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quidem! Corporis, quae? Libero quisquam enim saepe tenetur, dicta quidem, ipsa adipisci, esse odio reiciendis inventore fugiat nam quia. Quo, reprehenderit.
                        Dolorem at alias ea nam, repellat earum dignissimos quo, cumque saepe quaerat aliquam nesciunt illum dicta quasi? Temporibus, sapiente reprehenderit.
                    </p>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="h-[110vh] w-[50vw] object-cover" />
            </div>
        </section>
    )
}