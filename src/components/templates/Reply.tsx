import Avatar from "../atoms/Avatar";
import AvatarName from "../molecules/AvatarName";

function Reply() {
    return (
        <article className="bg-skin-base max-w-[598px]">
        <div className="p-4 flex flex-row align-stretch flex-auto">
            <div>
                <Avatar src="https://pbs.twimg.com/profile_images/2320423543/9qheijpvtu9g5dteqvvw_400x400.jpeg" />
                <div className="w-1 mt-1 h-full" style={{ "backgroundColor": "rgb(66, 83, 100)"}}></div>
            </div>

            <div>
                <AvatarName name="Adam Wathan" handler="adamwathan" verified="person" />
                <span>Replying to @adamwathan</span>
                <p className="text-skin-base">
                    We put just as much of our attention into the code on these templates as we did with the design.
                    <br/>
                    They are the absolute best way to learn how we build production-ready sites with Tailwind CSS and React ourselves 🤩
                </p>
            </div>
        </div>
        </article>
    )
}

export default Reply;