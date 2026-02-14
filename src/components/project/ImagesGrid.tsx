export default function ImagesGrid() {
    return (
        <section className="grid grid-cols-3 gap-5 py-10">
            <div className="col-span-1">
                <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="h-full w-[50vw] object-cover" />
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                        <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="h-[50vh] w-[70vw] object-cover" />
                    </div>
                    <div className="col-span-2">
                        <div className="flex justify-between gap-5">
                            <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="h-[60vh] w-[30vw] object-cover" />
                            <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="h-[60vh] w-[25vw] object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}