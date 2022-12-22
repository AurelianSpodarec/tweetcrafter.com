function Stat(props:StatProps) {
    return (
        <p className="text-sm">
            <span className="text-skin-base font-bold">{props.amount}</span>
            <span className="text-skin-muted">{props.name}</span>
        </p>
    )
}

export default Stat;

interface StatProps {
    amount: number | string;
    name: string;
}