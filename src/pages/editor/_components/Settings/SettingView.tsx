import React, { useState } from 'react';

import OptionView from './Menus/Options/OptionView'; 
import ProfileList from './Menus/Profile/ProfileList';
import SettingList from './Menus/Setting/SettingList';


function SettingView() {
    const [activeTab, setActiveTab] = useState('settings');

    const tabs = [
        {
            name: 'Type',
            icon: '<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/></svg>',
            component: <OptionView />
        },
        {
            name: 'Settings',
            icon: '<svg className="w-full h-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"></path></svg>',
            component: <SettingList />
        },
        {
            name: 'Profiles',
            icon: '<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>',
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
                        className={` ${activeTab === tab.name.toLowerCase() ? 'bg-[#314152] font-bold' : 'font-semibold  hover:bg-[#333e4a]'} p-4 text-gray-50 `}
                        onClick={() => setActiveTab(tab.name.toLowerCase())}
                    >
                        <div className="h-6 w-6 fill-white" dangerouslySetInnerHTML={{__html: tab.icon}}/>
                        <span className="sr-only">{tab.name}</span>
                    </div>
                ))}

            </div>
            </nav>
        );
    }
      

    return (
        <div className="flex flex-row flex-1 relative h-full overflow-hidden">

            {renderTabs()}
           
            <div className="overflow-y-auto bg-[#314152] h-full w-full sidebar-scrollbar">
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