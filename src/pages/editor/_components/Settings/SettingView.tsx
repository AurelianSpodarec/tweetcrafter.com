import React, { useState } from 'react';

import OptionView from './_components/Options/OptionView'; 
import ProfileList from './_components/Profile/ProfileList';
import SettingList from './_components/Setting/SettingList';


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
        return tabs.map((tab, index) => (
            <div
                key={index}
                className={
                    activeTab === tab.name.toLowerCase()
                    ? 'border border-transparent border-b-indigo-500 text-gray-50 font-medium'
                    : 'text-gray-50 font-medium'
                }
                onClick={() => setActiveTab(tab.name.toLowerCase())}
            >
            {tab.name}
            </div>
        ));
    }

    return (
        <div className="flex flex-col flex-1 relative overflow-hidden">

            <header className="flex sticky top-0 flex-row w-full border-b border-gray-700 bg-[#2b3140]">
            <div className="p-4 flex justify-between items-center w-full">
                {renderTabs()}
            </div>
            </header>

            <div className="overflow-y-auto bg-[#314152]">
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