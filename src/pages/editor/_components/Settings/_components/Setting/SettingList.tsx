import { useTweetTabs } from "../../../../../../context/TweetTabsInfo";

function Widget({children}:any) {
    return (
        <div className="p-4">
            {children}
        </div>
    )
}

function SettingList() {
    const { twitterTheme, setTwitterThemeTo, twitterPrimaryColor, SetTwitterPrimaryColorTo } = useTweetTabs();

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
            <Widget>
                <h3 className="text-gray-200 mb-2 font-semibold">Color</h3>
                <div className="flex flex-wrap space-x-2 text-sm p-2 bg-gray-800 rounded-xl">
                    <button onClick={() => SetTwitterPrimaryColorTo("1")} className="h-10 w-10 rounded-xl theme-twitter-primary-1 bg-skin-accent">
                        <div className={`${twitterPrimaryColor === "1" ? "block" : "hidden"} fill-white h-6 w-6 m-auto`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                    </button>
                    <button onClick={() => SetTwitterPrimaryColorTo("2")} className="h-10 w-10 rounded-xl theme-twitter-primary-2 bg-skin-accent">
                        <div className={`${twitterPrimaryColor === "2" ? "block" : "hidden"} fill-white h-6 w-6 m-auto`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                    </button>
                    <button onClick={() => SetTwitterPrimaryColorTo("3")} className="h-10 w-10 rounded-xl theme-twitter-primary-3 bg-skin-accent">
                        <div className={`${twitterPrimaryColor === "3" ? "block" : "hidden"} fill-white h-6 w-6 m-auto`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                    </button>
                    <button onClick={() => SetTwitterPrimaryColorTo("4")} className="h-10 w-10 rounded-xl theme-twitter-primary-4 bg-skin-accent">
                        <div className={`${twitterPrimaryColor === "4" ? "block" : "hidden"} fill-white h-6 w-6 m-auto`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                    </button>
                    <button onClick={() => SetTwitterPrimaryColorTo("5")} className="h-10 w-10 rounded-xl theme-twitter-primary-5 bg-skin-accent">
                        <div className={`${twitterPrimaryColor === "5" ? "block" : "hidden"} fill-white h-6 w-6 m-auto`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                    </button>
                    <button onClick={() => SetTwitterPrimaryColorTo("6")} className="h-10 w-10 rounded-xl theme-twitter-primary-6 bg-skin-accent">
                        <div className={`${twitterPrimaryColor === "6" ? "block" : "hidden"} fill-white h-6 w-6 m-auto`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                    </button>
                </div>
            </Widget>

            <Widget>
            <h3 className="text-gray-200 mb-2 font-semibold">Theme</h3>
            <div className="flex space-x-2 text-sm bg-[#1e2732] p-2">
                <button onClick={() => setTwitterThemeTo('default')}  className={`${twitterTheme === 'default' ? "outline outline-orange-700" : ""} bg-white text-sm font-bold text-[#0f1419] px-3 py-1`} style={{ "borderColor":"border-color: rgb(51, 54, 57)"}}>Default</button>
                <button onClick={() => setTwitterThemeTo('dim')} className={`${twitterTheme === 'dim' ? "outline outline-orange-700" : ""} bg-[#15202b] text-sm font-bold text-[#f7f9f9] px-3 py-1`} style={{ "borderColor":"border-color: rgb(51, 54, 57)"}}>Dim</button>
                <button onClick={() => setTwitterThemeTo('lights-out')} className={`${twitterTheme === 'lights-out' ? "outline outline-orange-700" : ""} bg-black text-sm font-bold text-[#e7e9ea] px-3 py-1`} style={{ "borderColor":"border-color: rgb(51, 54, 57)"}}>Lights Out</button>
            </div>
            </Widget>

        

{/* Content */}
            {/* <div className="text-gray-300 p-4">
                <h3>Profile</h3>
                <div>
                    <div>Verified Badge: Yes/No</div>
                    <div>Fact Check Warning: Yes/No</div>
                </div>
            </div> */}
            {/* add image */}
{/* 
            <Widget>
            <div className="text-gray-300">
            <h3 className="text-gray-200 mb-2 font-semibold">Emoj Style</h3>

                <div>
                    <div>Twitter: 😂😭💀</div>
                    <div>System: 😂😭💀</div>
                </div>
            </div>
            </Widget> */}

            <Widget>
            <div className="text-gray-300">
            <h3 className="text-gray-200 mb-2 font-semibold">Font Style</h3>
                <div>
                    <div>Twitter Chirp Font</div>
                    <div>System Font</div>
                    <div>Inter</div>
                </div>
            </div>
            </Widget>

        </div>
    )
}


export default SettingList;