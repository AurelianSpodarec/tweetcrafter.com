import Profile from "../../../../components/templates/Profile";
import Tweet from "../../../../components/templates/Tweet";
import { useTweetTabs } from "../../../../context/TweetTabsInfo";
import profiles from "../../../../json/profiles";

function ContentView() {
    const { activeTab, setActiveTab, mainProfile } = useTweetTabs();


    return (
        <div className="flex flex-col rounded-xl overflow-hidden">
            <div className="space-y-8 flex">
                {activeTab === 'profile' && <Profile data={mainProfile} />}
                {activeTab === 'tweet' && <Tweet data={mainProfile} />}
            </div>
        </div>
    )
}

export default ContentView;