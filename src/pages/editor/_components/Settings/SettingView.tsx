import React, { useState } from 'react';

import OptionView from './Menus/Options/OptionView'; 
import ProfileList from './Menus/Profile/ProfileList';
import SettingList from './Menus/Setting/SettingList';


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
        return (
            <nav className="flex-row w-full border-b border-gray-700 bg-[#2b3140] max-w-[55px]">
            <div className="p-4 flex flex-col justify-between items-center w-full">

                {tabs.map((tab, index) => (
                    <div
                    key={index}
                    className={
                        activeTab === tab.name.toLowerCase()
                        ? 'bg-314152 p-4 text-gray-50 font-bold'
                        : 'text-gray-50 p-4 font-semibold'
                    }
                    onClick={() => setActiveTab(tab.name.toLowerCase())}
                    >
                    {tab.name}
                    </div>
                ))}

            </div>
            </nav>
        );
    }
      

    return (
        <div className="flex flex-row flex-1 relative h-full overflow-hidden">

            
                {renderTabs()}
           

            <div className="overflow-y-auto bg-[#314152] h-full w-full">
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