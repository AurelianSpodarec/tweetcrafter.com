import Stat from "../atoms/Stat"
import TweetTextarea from "../atoms/TweetTextarea"
import AvatarName from "../molecules/AvatarName"

function Tweet(props:TweetProps) {
    const { data: { 
         name, 
         handler, 
         screen_name, 
         profile_image_url
    } } = props;

    return (
        <article className="max-w-[598px] bg-[#000000] p-4">
            <AvatarName name={name} handler={handler} src={profile_image_url} />

            <section>
                <TweetTextarea />
                {/* <img className="mt-4 rounded-2xl" src="https://c4.wallpaperflare.com/wallpaper/327/414/565/winter-snow-ice-dog-icicles-hd-wallpaper-preview.jpg" /> */}
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
        name: string;
        screen_name: string;
        handler: string;
        profile_image_url: string;
    }
}