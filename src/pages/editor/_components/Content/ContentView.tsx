import AccountSuspended from "../../../../components/templates/AccountSuspended";
import Pool from "../../../../components/templates/Pool";
import Profile from "../../../../components/templates/Profile";
import Reply from "../../../../components/templates/Reply";
import Tweet from "../../../../components/templates/Tweet";
import { useTweetTabs } from "../../../../context/TweetTabsInfo";
import profiles from "../../../../json/profiles";

function ContentView() {
    // @ts-ignore
    const { activeTab, setActiveTab, mainProfile, twitterTheme, twitterPrimaryColor } = useTweetTabs();


    return (
        <div className="flex flex-col rounded-xl overflow-hidden">
            <div className={`theme-twitter-primary-${twitterPrimaryColor} theme-twitter-${twitterTheme} space-y-8 flex`}>
                {activeTab === 'profile' && <Profile data={mainProfile} />}
                {activeTab === 'tweet' && <Tweet data={mainProfile} />}
                {activeTab === 'reply' && <Reply />}
                {activeTab === 'account_suspended' && <AccountSuspended />}
                {activeTab === 'pool' && <Pool />}
            </div>
        </div>
    )
}

export default ContentView;