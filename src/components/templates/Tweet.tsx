import Stat from "../atoms/Stat"
import TweetImage from "../atoms/TweetImage";
import TweetTextarea from "../atoms/TweetTextarea"
import AvatarName from "../molecules/AvatarName"

function Tweet(props:TweetProps) {
    const { data: { 
        id,
        name, 
        handler, 
        screen_name, 
        profile_image_url,
        tweetSrc,
        text
    } } = props;

    return (
        <article id={id} className="max-w-[598px] bg-skin-base p-4">
            <AvatarName name={name} handler={handler} src={profile_image_url} verified="person" />

            <section>
                <TweetTextarea text="Hey @elonmusk,  it’s unwise to run a poll like this when you are now deep state enemy #1. They have the biggest bot army on Twitter. They have 100k ‘analysts’ with 30-40 accounts all voting against you. Let’s clean up and then run this poll again. The majority has faith in you. 😘" />
                <TweetImage src={tweetSrc} />
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

interface TweetProps {
    data: {
        id: string;
        name: string;
        screen_name: string;
        handler: string;
        profile_image_url: string;
        tweetSrc: string;
        text: string;
    }
}