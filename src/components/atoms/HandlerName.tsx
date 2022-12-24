function HandlerName({handler}:HandlerNameProps) {
    return (
        <span className="text-skin-muted font-normal" style={{ "fontSize": "15px"}}>@<span>{handler}</span></span>
    )
}

export default HandlerName;

interface HandlerNameProps {
    handler?: string;
}