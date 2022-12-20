import Avatar from "../atoms/Avatar";
import NameHandler from "../atoms/NameHandler";
import VerifiedBadge from "../atoms/VerifiedBadge";

function AvatarName() {
    return (
        <div>
            <header className="flex space-x-3  mb-4">
                <Avatar />
                <div className="flex flex-col">
                    <div className="flex items-center space-x-0.5">
                        <span className="font-bold text-[#e7e9ea]" contentEditable>Kim Dotcome</span>
                        <VerifiedBadge type="person" />
                    </div>
                    <NameHandler />
                   
                </div>
            </header>
        </div>
    )
}

export default AvatarName;