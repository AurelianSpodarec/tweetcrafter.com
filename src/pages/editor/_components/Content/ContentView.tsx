import { useState } from "react";
import AccountSuspended from "../../../../components/organisms/AccountSuspended";
import Pool from "../../../../components/organisms/Pool";
import Profile from "../../../../components/organisms/Profile";
import RelevantPeople from "../../../../components/organisms/RelevantPeople";
import Reply from "../../../../components/organisms/Reply";
import Tweet from "../../../../components/organisms/Tweet";
import { useTwitterEditor } from "../../../../context/TwitterEditorInfo";
import profiles from "../../../../json/profiles";

function ReplyChain({ data }: any) {
    return (
        data.map((item:any, index:number) => {
            return <Reply data={item} key={index} />
        })
    )
}


function ContentView() {
    // @ts-ignore
    const { activeTab, setActiveTab, mainProfile, selectedFont, twitterTheme, twitterPrimaryColor } = useTwitterEditor();

    const [profilesData, setProfilesData] = useState([]);

    function populateReplies() {
        // @ts-ignore
        setProfilesData([{...profiles[4]}, {...profiles[5]}, {...profiles[4]}]);
    }

    return (
        <div className="flex flex-col rounded-xl overflow-hidden font-family-chirp">
            <div className={`fontFamily-${selectedFont} theme-twitter-primary-${twitterPrimaryColor} theme-twitter-${twitterTheme} space-y-8 flex`}>
                {activeTab === 'profile' && <Profile data={mainProfile} />}
                {activeTab === 'account_suspended' && <AccountSuspended />}
                {activeTab === 'tweet' && <Tweet data={mainProfile} />}
                {activeTab === 'reply' && 
                    <>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <Reply data={profiles[2]} />
                            <ReplyChain data={profilesData} />
                        </div>

                        <button>Add New Reply</button>
                        <button onClick={() => populateReplies()}>Populate data</button>
                    </div>
                    </>
                }
                {activeTab === 'pool' && <Pool />}
                {activeTab === 'relevant_people' && <RelevantPeople />}
            </div>
        </div>
    )
}

export default ContentView;