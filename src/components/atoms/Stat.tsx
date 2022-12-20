function Stat(props:StatProps) {
    return (
        <p className="text-[#71767b] text-sm"><span className="text-[#e7e9ea] font-bold">{props.amount}</span>{props.name}</p>
    )
}

export default Stat;

interface StatProps {
    amount: number | string;
    name: string;
}