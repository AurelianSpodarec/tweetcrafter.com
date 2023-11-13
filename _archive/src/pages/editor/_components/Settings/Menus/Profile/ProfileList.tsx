import { useState } from "react";
import AvatarName from "../../../../../../components/molecules/AvatarName";
import { useTwitterEditor } from "context/TwitterEditorInfo";
import profiles from "../../../../../../json/profiles";
import Drawer from "../../_components/Drawer";


function ProfileList() {
    // @ts-ignore
    const { activeTab, setActiveTab, setMainProfileTo } = useTwitterEditor();

    function ProfileSearch() {
        const [input, setInput] = useState('');

        return (
            <div className="p-4 sticky top-[60px] z-10 bg-[#314152]">
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                    </div>
                    <input onChange={(e:any) => setInput(e.target.value)} type="text" name="text" id="search" className="block w-full rounded-md border-gray-300 pl-10 h-8 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search..." />
                </div>
            </div>
        )
    }

    function ProfileItem({profile}:any) {
       return (
           <li className="flex relative">
               <AvatarName onClick={() => setMainProfileTo(profile.id)} type={profile.type} src={profile.profile_avatar} name={profile.name} handler={profile.handler} verified={profile.type} className="cursor-pointer" />
               <button className="absolute right-0 p-2 rounded-xl text-white h-10">
                <svg className="fill-gray-400 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg>
               </button>
           </li>
       )
    }

    return (
        <Drawer title="Profile List">

            <ProfileSearch />
            {/* <div className="flex justify-around sticky top-0">
                <h2>People</h2>
                <h2>Companies</h2>
                <h2>Gov</h2>
            </div> */}
        
            <ul className="p-4 theme-twitter-dim z-0 relative">
                {profiles.map(profile => {
                    return <ProfileItem profile={profile} key={profile.id} />
                })}
            </ul> 
        </Drawer>
    )
};

export default ProfileList;