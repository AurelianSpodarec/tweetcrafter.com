import AvatarName from "../../../../../../components/molecules/AvatarName";
import { useTweetTabs } from "../../../../../../context/TweetTabsInfo";
import profiles from "../../../../../../json/profiles";


function ProfileList() {
    // @ts-ignore
    const { activeTab, setActiveTab, setMainProfileTo } = useTweetTabs();

    function ProfileItem({profile}:any) {
       return (
           <li className="flex relative">
               <AvatarName src={profile.profile_image_url} name={profile.name} handler={profile.handler} verified={profile.verified}  />
               <button className="opacity-0 hover:opacity-100 absolute right-0 p-2 rounded-xl bg-indigo-500 text-white" onClick={() => setMainProfileTo(profile.id)}>Load Profile</button>
           </li>
       )
    }

    return (
        <ul className="theme-twitter-dim">
            {profiles.map(profile => {
                return <ProfileItem profile={profile} key={profile.id} />
            })}
        </ul> 
    )
};

export default ProfileList;