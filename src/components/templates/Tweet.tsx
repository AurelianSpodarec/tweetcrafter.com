import Stat from "../atoms/Stat"
import TweetTextarea from "../atoms/TweetTextarea"
import AvatarName from "../molecules/AvatarName"

function Tweet() {
    return (
        <article className="max-w-[598px] bg-[#000000] p-4">
            <AvatarName name="Kim Dotcom" handler="KimDotcom" src="https://pbs.twimg.com/profile_images/2320423543/9qheijpvtu9g5dteqvvw_400x400.jpeg" />

            <section>
                <TweetTextarea />
            </section>

            <footer>
                <time dateTime="2022-12-19T12:06:26.000Z" className="text-[#71767b] py-4 block" style={{"fontSize": "15px"}}>
                    12:06 PM · Dec 19, 2022
                </time>
                <div className="flex space-x-6">
                    <Stat amount="7,433" name="Retweets" />
                    <Stat amount="634" name="Quote Tweets" />
                    <Stat amount="56.1k" name="Likes" />
                </div>
            </footer>
        </article>
    )
}

export default Tweet;