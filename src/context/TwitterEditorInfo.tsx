import React, { createContext, createRef, useContext, useState } from 'react';
import profiles from '../json/profiles';

const TweetTabsContext = createContext({
    activeTab: '',
    setActiveTab: (id: string) => {},
});
 
const refHTML = createRef(null);
// Rename this to Twitter Settings
function TwitterEditorProvider({ children }: any) {
    const [activeTab, setActiveTab] = useState('profile');
    const [mainProfile, setMainProfile] = useState(profiles[1])
    const [twitterTheme, setTwitterTheme] = useState('lights-out')
    const [twitterPrimaryColor, setTwitterPrimaryColor] = useState('1');
    const [selectedFont, setSelectedFont] = useState('twitterChirp');

    // loaded profile, one that you can edit, change etc...

    function setSelectedFontTo(font: "twitterChirp" | "System") {
        setSelectedFont(font)
    }

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
        SetTwitterPrimaryColorTo,
        selectedFont,
        setSelectedFontTo,
        refHTML
    };

    return <TweetTabsContext.Provider value={value}>{children}</TweetTabsContext.Provider>;
}

// Use as a hook
function useTwitterEditor() {
    const context = useContext(TweetTabsContext)

    if (context === undefined) {
        throw new Error('useTwitterEditor must be used within a TwitterEditorProvider')
      }
      return context
}

export {
    TwitterEditorProvider,
    useTwitterEditor
}