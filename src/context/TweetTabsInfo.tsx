import React, { createContext, useContext, useState } from 'react';

const TweetTabsContext = createContext({
    activeTab: '',
    setActiveTab: (id: string) => {},
});

function TweetTabsProvider({ children }: any) {
    const [activeTab, setActiveTab] = useState('profile');

    const value = { 
        activeTab, 
        setActiveTab 
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