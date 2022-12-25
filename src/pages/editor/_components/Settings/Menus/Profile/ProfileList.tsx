import AvatarName from "../../../../../../components/molecules/AvatarName";
import { useTweetTabs } from "../../../../../../context/TweetTabsInfo";
import profiles from "../../../../../../json/profiles";
import Drawer from "../../_components/Drawer";


function ProfileList() {
    // @ts-ignore
    const { activeTab, setActiveTab, setMainProfileTo } = useTweetTabs();

    function ProfileItem({profile}:any) {
       return (
           <li className="flex relative">
               <AvatarName src={profile.profile_avatar} name={profile.name} handler={profile.handler} verified={profile.verified}  />
               <button className="opacity-0 hover:opacity-100 absolute right-0 p-2 rounded-xl bg-indigo-500 text-white" onClick={() => setMainProfileTo(profile.id)}>Load Profile</button>
           </li>
       )
    }

    return (
        <Drawer title="Profile List">
        <div className="flex justify-around sticky top-0">
            <h2>People</h2>
            <h2>Companies</h2>
            <h2>Gov</h2>
        </div>
        <ul className="theme-twitter-dim">
            {profiles.map(profile => {
                return <ProfileItem profile={profile} key={profile.id} />
            })}
        </ul> 
        </Drawer>
    )
};

export default ProfileList;