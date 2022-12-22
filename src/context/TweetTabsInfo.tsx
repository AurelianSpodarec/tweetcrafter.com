import React, { createContext, useContext, useState } from 'react';
import profiles from '../json/profiles';

const TweetTabsContext = createContext({
    activeTab: '',
    setActiveTab: (id: string) => {},
});

function TweetTabsProvider({ children }: any) {
    const [activeTab, setActiveTab] = useState('profile');
    const [mainProfile, setMainProfile] = useState(profiles[1])
    const [twitterTheme, setTwitterTheme] = useState('lights-out')
    const [twitterPrimaryColor, setTwitterPrimaryColor] = useState('1');

    function setMainProfileTo(id:number) {
        // if(profiles.length !== id) return
        setMainProfile(profiles[id - 1])
    }

    function setTwitterThemeTo(theme: 'default' | 'dim' | 'lights-out') {
        setTwitterTheme(theme)
    }

    function SetTwitterPrimaryColorTo(color:any) {
        setTwitterPrimaryColor(color)
    }

    const value = { 
        activeTab, 
        setActiveTab,
        mainProfile,
        setMainProfile,
        setMainProfileTo,
        twitterTheme,
        setTwitterThemeTo,
        twitterPrimaryColor,
        SetTwitterPrimaryColorTo
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