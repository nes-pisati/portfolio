export default function Technologies() {
    return (
        <section className="padding-x py-10">
            <h2 className="section-title">Technologies</h2>
            <p className="tech-description py-10">I’m a frontend developer who enjoys building interfaces that are clean, functional, and easy to maintain. My stack is centered around JavaScript, React, and modern tooling, but I’m always open to learning new languages and frameworks.</p>
            <div className="grid grid-cols-4 gap-10 py-10">
                <div className="col-span-1">
                    <p className="tech-title">Frame<br></br>works</p>
                    <ul className="pt-10">
                        <li className="tech-description">Angular</li>
                        <li className="tech-description">React</li>
                        <li className="tech-description">React Native</li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <p className="tech-title">Languages</p>
                    <ul className="pt-10">
                        <li className="tech-description">TypeScript</li>
                        <li className="tech-description">JavaScript</li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className="pt-10">
                        <li className="tech-description">Html</li>
                        <li className="tech-description">CSS</li>
                        <li className="tech-description">Sass</li>
                        <li className="tech-description">Tailwind</li>
                        <li className="tech-description">Gsap</li>
                        <li className="tech-description">Node JS</li>
                        <li className="tech-description">Mongo DB</li>
                    </ul>
                </div>
            </div>
        </section>

    )
}