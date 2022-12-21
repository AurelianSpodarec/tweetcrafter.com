import Profile from "../../../../components/templates/Profile";
import Tweet from "../../../../components/templates/Tweet";
import { useTweetTabs } from "../../../../context/TweetTabsInfo";
import profiles from "../../../../json/profiles";

function ContentView() {
    const { activeTab, setActiveTab } = useTweetTabs();
    
    return (
        <div className="flex flex-col">
            <div className="space-y-8 flex">
                {activeTab === 'profile' && <Profile data={profiles[1]} />}
                {activeTab === 'tweet' && <Tweet data={profiles[1]} />}
            </div>
        </div>
    )
}

export default ContentView;