import Complementary from "../../../../../../components/organisms/Complementary";
import Profile from "../../../../../../components/organisms/Profile";
import Reply from "../../../../../../components/organisms/Reply";
import Tweet from "../../../../../../components/organisms/Tweet";
import { useTwitterEditor } from "context/TwitterEditorInfo";
import profiles from "../../../../../../json/profiles";
import Drawer from "../../_components/Drawer";

const options = [
    {
        "id": 'profile',
        "name": "Profile",
        "thumbnail": "https://i.imgur.com/naK8pBm.png",
        "coming_soon": false,
        "component": <Profile data={profiles[2]} />
    },
    {
        "id": "tweet",
        "name": "Tweet",
        "thumbnail": "https://i.imgur.com/UWmMBMa.png",
        "coming_soon": false,
        "component": <Tweet data={profiles[2]} />
    },
    {
        "id": "reply",
        "name": "Reply",
        "thumbnail": "https://i.imgur.com/UWmMBMa.png",
        "coming_soon": false,
        "component": <Reply data={profiles[2]} />
    },
    {
        "id": "complementary",
        "name": "complementary",
        "thumbnail": "https://i.imgur.com/HbklUeF.png",
        "coming_soon": false,
        "component": <Complementary data={profiles[2]} />
    }
    // { this should be part of TWEET Options - include pool? same with image and quote
    //     "id": "pool",
    //     "name": "Pool",
    //     "thumbnail": "https://i.imgur.com/HbklUeF.png",
    //     "coming_soon": false,
    // },
    // { - should be option to toggle on profile
    //     "id": 'account_suspended',
    //     "name": "Account Suspended",
    //     "thumbnail": "https://i.imgur.com/UWmMBMa.png",
    //     "coming_soon": false,
    // },
  
]


function OptionView() {

    function OptionItem(props: any) {
        const option = props.data;
        const { activeTab, setActiveTab } = useTwitterEditor();
    
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
            <div className="cursor-pointer p-4" onClick={() => setActiveTab(option.id)}>
                {/* <img className="rounded-xl" src={option.thumbnail} /> */}
                <div className="relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0 z-10"></div>
                    <div className="theme-twitter-lights-out -m-4" style={{"zoom": "0.465"}}>{option.component}</div>
                    {/* "transform": "scale(45%) translate(-50%, -50%)" */}
                </div>
                <h3 className="text-center pt-4 text-gray-300">{option.name}</h3>
            </div>
        )
    }

    return (
        <Drawer title="Type">
            {options.map((option) => {
                return <OptionItem key={option.id} data={option} />
            })}
        </Drawer>
    )
}

export default OptionView;