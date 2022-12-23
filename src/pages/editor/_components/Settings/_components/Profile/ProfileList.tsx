import AvatarName from "../../../../../../components/molecules/AvatarName";
import { useTweetTabs } from "../../../../../../context/TweetTabsInfo";
import profiles from "../../../../../../json/profiles";

function ProfileItem({profile}:any) {
    // @ts-ignore
   const { activeTab, setActiveTab, setMainProfileTo } = useTweetTabs();

   return (
       <li className="flex relative">
           <AvatarName src={profile.profile_image_url} name={profile.name} handler={profile.handler} verified={profile.verified}  />
           <button className="opacity-0 hover:opacity-100 absolute right-0 p-2 rounded-xl bg-indigo-500 text-white" onClick={() => setMainProfileTo(profile.id)}>Load Profile</button>
       </li>
   )
}

const ProfileList = () => (
   <ul className="theme-twitter-dim">
       {profiles.map(profile => {
           return <ProfileItem profile={profile} key={profile.id} />
       })}
   </ul> 
);

export default ProfileList;