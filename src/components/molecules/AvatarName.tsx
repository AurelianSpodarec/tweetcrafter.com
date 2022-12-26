import Avatar from "../atoms/Avatar";
import NameHandler from "../atoms/HandlerName";
import VerifiedBadge from "../atoms/VerifiedBadge";

function AvatarName({src, name, handler, verified, className, onClick, shape, type, option}:AvatarNameProps) {
    console.log(type)
    return (
        <header onClick={onClick} className={`flex space-x-3 ${option === "reply" ? "" : "mb-4"} ${className}`}>
            <Avatar src={src} shape={type} type={type}/>
            

            <div className="flex flex-col">
                <div className={`flex  ${option === "reply" ? "flex-row items-center space-x-1" : "flex-col"}`}>
                    <div className="flex items-center space-x-0.5">
                        <span title={name} className="text-skin-base text-xl font-extrabold">{name}</span>
                        <VerifiedBadge verified={verified} />
                    </div>
                    <NameHandler handler={handler} />
                </div>
            </div>

            <div className="flex flex-row items-baseline">
                <div className="text-skin-muted inline" style={{ "fontSize" : "15px", "lineHeight": "20px" }}>.</div>
                <div>
                    <span className="text-skin-muted">Dec 10</span>
                </div>
            </div>
        </header>
    )
}

export default AvatarName;

interface AvatarNameProps {
    className?: string;
    onClick?: any;
    src?: string;
    name: string;
    handler: string;
    verified?: "person" | "business" | "gov";
    shape?: "rounded" | "rect";
    type?: any;
    option?: any;
}