import NameHandler from "./NameHandler";
import VerifiedBadge from "./VerifiedBadge";

function UserName() {
    // const nameHandlerShow = useState(true);
    return (
    <div className="flex flex-col">
        <div className="flex items-center space-x-0.5">
            <span className="font-bold text-[#e7e9ea]">Kim Dotcome</span>
            <VerifiedBadge type="person" />
        </div>
        <NameHandler />
        {/* {isShown ? <NameHandler /> : ""} */}
        
    </div>
    )
}

export default UserName;