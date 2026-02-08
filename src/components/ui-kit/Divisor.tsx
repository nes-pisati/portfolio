interface DivisorProps {
    text: string;
}

export default function Divisor({ text }: DivisorProps) {

    return (
        <div className="relative py-2 min-h-15 border-y flex items-center w-screen left-1/2 -translate-x-1/2 overflow-hidden">
            <div className="absolute flex gap-4 whitespace-nowrap">
                {Array.from({ length: 100 }).map((_, i) => (
                    <p key={i} className="divisor-text">
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}