import AccountSuspended from "../../../../components/organisms/AccountSuspended";
import Pool from "../../../../components/organisms/Pool";
import Profile from "../../../../components/organisms/Profile";
import RelevantPeople from "../../../../components/organisms/RelevantPeople";
import Reply from "../../../../components/organisms/Reply";
import Tweet from "../../../../components/organisms/Tweet";
import { useTwitterEditor } from "../../../../context/TwitterEditorInfo";
import profiles from "../../../../json/profiles";

function ContentView() {
    // @ts-ignore
    const { activeTab, setActiveTab, mainProfile, selectedFont, twitterTheme, twitterPrimaryColor } = useTwitterEditor();


    return (
        <div className="flex flex-col rounded-xl overflow-hidden font-family-chirp">
            <div className={`fontFamily-${selectedFont} theme-twitter-primary-${twitterPrimaryColor} theme-twitter-${twitterTheme} space-y-8 flex`}>
                {activeTab === 'profile' && <Profile data={mainProfile} />}
                {activeTab === 'account_suspended' && <AccountSuspended />}
                {activeTab === 'tweet' && <Tweet data={mainProfile} />}
                {activeTab === 'reply' && <Reply />}
                {activeTab === 'pool' && <Pool />}
                {activeTab === 'relevant_people' && <RelevantPeople />}
            </div>
        </div>
    )
}

export default ContentView;