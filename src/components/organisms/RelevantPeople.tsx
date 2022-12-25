import AvatarName from "../molecules/AvatarName";

function RelevantPeople() {
    return (
        <div>
            <div>
                <h3>Relevant People</h3>
                <div>
                    <AvatarName name="Adam Wathan" handler="adamwathan" src="https://twitter.com/adamwathan" />
                    Creator of @tailwindcss. Listener of Slayer. Austin 3:16.
                </div>
            </div>
        </div>
    )
}

export default RelevantPeople;