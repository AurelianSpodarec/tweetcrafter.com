import Profile from "../../../../../../components/organisms/Profile";
import Tweet from "../../../../../../components/organisms/Tweet";
import { useTweetTabs } from "../../../../../../context/TweetTabsInfo";

const options = [
    {
        "id": 'profile',
        "name": "Profile",
        "thumbnail": "https://i.imgur.com/naK8pBm.png",
        "coming_soon": false,
        // "component": <Profile />
    },
    {
        "id": 'account_suspended',
        "name": "Account Suspended",
        "thumbnail": "https://i.imgur.com/UWmMBMa.png",
        "coming_soon": false,
    },
    {
        "id": "tweet",
        "name": "Tweet",
        "thumbnail": "https://i.imgur.com/UWmMBMa.png",
        "coming_soon": false,
        // "component": <Tweet  />
    },
    {
        "id": "reply",
        "name": "Reply",
        "thumbnail": "https://i.imgur.com/UWmMBMa.png",
        "coming_soon": false,
    },
    {
        "id": "pool",
        "name": "Pool",
        "thumbnail": "https://i.imgur.com/HbklUeF.png",
        "coming_soon": false,
    },
    {
        "id": "relevant_people",
        "name": "Relevant People",
        "thumbnail": "https://i.imgur.com/HbklUeF.png",
        "coming_soon": false,
    }
]


function OptionView() {

    function Option(props: any) {
        const option = props.data;
        const { activeTab, setActiveTab } = useTweetTabs();
    
        if(option.coming_soon === true) 
        return (
            <div>
                <div className="p-4 text-center">
                <img className="rounded-xl" src={option.thumbnail} />
                <h3 className="text-gray-300">{option.name} <br/>(Coming Soon)</h3>
            </div>
            </div>
        )
        return (
            <div className="p-4 text-center" onClick={() => setActiveTab(option.id)}>
                <img className="rounded-xl" src={option.thumbnail} />
                <h3 className="text-gray-300">{option.name}</h3>
            </div>
        )
    }

    return (
        <>
            {options.map((option) => {
                return <Option key={option.id} data={option} />
            })}
        </>
    )
}

export default OptionView;