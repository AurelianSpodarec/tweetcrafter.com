import React, { useState } from 'react';
import AvatarName from "../../../../components/molecules/AvatarName";
import { useTweetTabs } from "../../../../context/TweetTabsInfo";
import profiles from "../../../../json/profiles";
import OptionView from '../Options/OptionView';


function ProfileItem({profile}:any) {
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


function SettingList() {
    return (
        <div>

{/* 
        <div className="p-4">
            <button className="w-full" type="button" aria-expanded="false">
                <div className="flex justify-between items-center text-gray-50 mb-3">
                    <h2 className="text-xs font-medium">Text</h2>
                </div>
            </button>

            <div className="text-gray-500" id="headlessui-disclosure-panel-:r5:">
                <div className="grid gap-2 grid-cols-[1fr_68px]"><div>
                    <span className="text-xs text-gray-50">Font Family</span>
                    <span className="sr-only">font family</span>
                </div>
                <div>
                    <span className="text-xs text-gray-50">Monsserate</span>
                    <span className="sr-only">Monsserate</span></div></div>
                    <div className="grid gap-2 grid-cols-[1fr_68px]"><div>
                        <span className="text-xs text-gray-50">Font Weight</span>
                        <span className="sr-only">font weight</span>
                    </div>
                        <div>
                            <span className="text-xs text-gray-50">Bold - 700</span>
                            <span className="sr-only">bold - 700</span>
                        </div>
                    </div>
                    
                    <div className="grid gap-2 grid-cols-[1fr_68px]"><div><span className="text-xs text-gray-50">Font Size</span><span className="sr-only">font size</span></div><div><span className="text-xs text-gray-50">18px</span><span className="sr-only">change font size. current: 18px</span></div></div><div className="grid gap-2 grid-cols-[1fr_68px]"><div><span className="text-xs text-gray-50">Color</span><span className="sr-only">Color</span></div><div><span className="text-xs text-gray-50">White</span><span className="sr-only">white</span></div></div></div>
                    
        </div> */}
            

            <div className="text-gray-300 p-4">
                <h3>Size</h3>
                <div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                </div>
            </div>

Content
            <div className="text-gray-300 p-4">
                <h3>Profile</h3>
                <div>
                    <div>Verified Badge: Yes/No</div>
                    <div>Fact Check Warning: Yes/No</div>
                </div>
            </div>
            add image

          
            <div className="text-gray-300 p-4">
                <h3>Emoj Style</h3>

                <div>
                    <div>Twitter: 😂😭💀</div>
                    <div>System: 😂😭💀</div>
                </div>
            </div>

            <div className="text-gray-300 p-4">
                <h3>Font</h3>
                <div>
                    <div>Twitter Chirp Font</div>
                    <div>System Font</div>
                    <div>Inter</div>
                </div>
            </div>

        </div>
    )
}


function SettingView() {
    const [activeTab, setActiveTab] = useState('settings');

    const tabs = [
        {
            name: 'Type',
            component: <OptionView />
        },
        {
            name: 'Settings',
            component: <SettingList />
        },
        {
            name: 'Profiles',
            component: <ProfileList />
        }
    ];

    function renderTabs() {
        return tabs.map(tab => (
            <div
                className={
                    activeTab === tab.name.toLowerCase()
                    ? 'bg-indigo-500 text-gray-50 font-medium'
                    : 'text-gray-50 font-medium'
                }
                onClick={() => setActiveTab(tab.name.toLowerCase())}
            >
            {tab.name}
            </div>
        ));
    }

    return (
        <div className="flex flex-col flex-1 overflow-hidden">

            <header className="flex flex-row w-full border-b border-gray-700 mb-4">
            <div className="p-4 flex justify-between items-center w-full">
                {renderTabs()}
            </div>
            </header>

            <div className="overflow-y-auto">
            {(() => {
                switch (activeTab) {
                case 'profiles':
                    return <ProfileList />;
                case 'settings':
                    return <SettingList />;
                case 'type':
                    return <OptionView />;
                default:
                    return null;
                }
            })()}
            </div>

        </div>
    );
}

export default SettingView;