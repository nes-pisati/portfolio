import SlidingText from "../ui-kit/SlidingText";

export default function Hero() {
    return (
        <>
            <section>
                <div className="h-[85vh] flex-center">
                    <SlidingText />
                </div>
                <div className="h-[85vh] flex justify-between absolute top-30 left-40 right-40">
                    <p className="hero-text"><span className="hero-text-span">H</span>e<span className="hero-text-span">ll</span>o, I'm</p>
                    <div className="flex flex-col justify-end">
                        <img src="../assets/Nes.png" alt="Nes" className="w-200" />
                    </div>
                </div>

            </section>
        </>
    )
}