import React, { createContext, useContext, useState } from 'react';
import profiles from '../json/profiles';

const TweetTabsContext = createContext({
    activeTab: '',
    setActiveTab: (id: string) => {},
});

function TweetTabsProvider({ children }: any) {
    const [activeTab, setActiveTab] = useState('profile');
    const [mainProfile, setMainProfile] = useState(profiles[1])

    function setMainProfileTo(id:number) {
        // if(profiles.length !== id) return
        setMainProfile(profiles[id - 1])
    }

    const value = { 
        activeTab, 
        setActiveTab,
        mainProfile,
        setMainProfile,
        setMainProfileTo
    };

    return <TweetTabsContext.Provider value={value}>{children}</TweetTabsContext.Provider>;
}

// Use as a hook
function useTweetTabs() {
    const context = useContext(TweetTabsContext)

    if (context === undefined) {
        throw new Error('useTweetTabs must be used within a TweetTabsProvider')
      }
      return context
}

export {
    TweetTabsProvider,
    useTweetTabs
}