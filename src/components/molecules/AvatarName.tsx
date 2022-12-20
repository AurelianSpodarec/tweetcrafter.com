import Avatar from "../atoms/Avatar";
import NameHandler from "../atoms/NameHandler";
import UserName from "../atoms/UserName";

function AvatarName() {
    return (
        <div>
            <header className="flex space-x-3 mb-4">
                <Avatar />
                <div className="flex flex-col">
                    <UserName />
                </div>
            </header>
        </div>
    )
}

export default AvatarName;