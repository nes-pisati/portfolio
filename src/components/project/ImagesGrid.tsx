export default function ImagesGrid() {
    return (
        <section className="images-grid-section">
            <div className="images-grid-left-col">
                <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="images-grid-left-img" />
            </div>
            <div className="images-grid-right-col">
                <div className="images-grid-right-inner">
                    <div className="images-grid-full-span">
                        <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="images-grid-top-img" />
                    </div>
                    <div className="images-grid-full-span">
                        <div className="images-grid-bottom-row">
                            <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="images-grid-bottom-img-1" />
                            <img src="https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project foto" className="images-grid-bottom-img-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}