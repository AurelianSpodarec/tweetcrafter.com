import Avatar from "../atoms/Avatar";
import NameHandler from "../atoms/HandlerName";
import VerifiedBadge from "../atoms/VerifiedBadge";

function AvatarName({src, name, handler, verified, className, onClick}:AvatarNameProps) {

    return (
        <header onClick={onClick} className={`flex space-x-3 mb-4 ${className}`}>
            <Avatar src={src} />

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-0.5">
                        <span className="text-skin-base text-xl font-extrabold">{name}</span>
                        <VerifiedBadge verified={verified} />
                    </div>
                    <NameHandler handler={handler} />
                </div>
            </div>
        </header>
    )
}

export default AvatarName;

interface AvatarNameProps {
    className?: string;
    onClick: any;
    src?: string;
    name: string;
    handler: string;
    verified?: "person" | "business" | "gov";
}