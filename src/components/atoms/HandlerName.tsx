function HandlerName({handler}:HandlerNameProps) {
    return (
        <span className="text-skin-muted">@<span>{handler}</span></span>
    )
}

export default HandlerName;

interface HandlerNameProps {
    handler?: string;
}