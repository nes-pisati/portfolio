export default function BlackShade({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div
            className="overflow-hidden"
            style={{
                maskImage:
                    'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage:
                    'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            }}
        >
            {children}
        </div>
    )
}
