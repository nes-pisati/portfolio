interface DivisorProps {
    text: string;
}

export default function Divisor({ text }: DivisorProps) {

    return (
        <div className="divisor-section">
            <div className="divisor-content">
                {Array.from({ length: 100 }).map((_, i) => (
                    <p key={i} className="divisor-text">
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}