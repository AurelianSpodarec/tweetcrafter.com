function HandlerName({handler}:HandlerNameProps) {
    return (
        <span className="text-[#71767b]">@<span>{handler}</span></span>
    )
}

export default HandlerName;

interface HandlerNameProps {
    handler?: string;
}