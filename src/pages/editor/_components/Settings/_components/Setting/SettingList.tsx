import { useTweetTabs } from "../../../../../../context/TweetTabsInfo";

function Widget({children}:any) {
    return (
        <div className="p-4">
            {children}
        </div>
    )
}

function SettingList() {
    // @ts-ignore
    const { twitterTheme, setTwitterThemeTo, twitterPrimaryColor, SetTwitterPrimaryColorTo } = useTweetTabs();

    function ColorSelect({id}:any) {
        return (
            <button onClick={() => SetTwitterPrimaryColorTo(id)} className={`h-10 w-10 rounded-xl theme-twitter-primary-${id} bg-skin-accent`}>
                <div className={`${twitterPrimaryColor === id.toString() ? "scale-100 opacity-1" : "scale-75 opacity-0 "}  ease-in duration-300 fill-white h-6 w-6 m-auto`}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                </div>
            </button>

            // This animates but above not? huh
            //  <button onClick={() => SetTwitterPrimaryColorTo("3")} className="h-10 w-10 rounded-xl theme-twitter-primary-3 bg-skin-accent">
            // <div className={`${twitterPrimaryColor === "3" ? "scale-100 opacity-100" : "scale-75 "} opacity-0 transition ease-in-out duration-150 fill-white h-6 w-6 m-auto`}>
            //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            //     </div>
            // </button>
        )
    }

    return (
        <div>

 
            <Widget>
                <h3 className="text-gray-200 mb-2 font-semibold">Color</h3>
                <div className="flex flex-wrap justify-between gap-y-2 gap-x-2 text-sm p-3 bg-gray-800 rounded-xl">
                    <ColorSelect id="1" />
                    <ColorSelect id="2" />
                    <ColorSelect id="3" />
                    <ColorSelect id="4" />
                    <ColorSelect id="5" />
                    <ColorSelect id="6" />
                </div>
            </Widget>

            <Widget>
                <h3 className="text-gray-200 mb-2 font-semibold">Theme</h3>
                <div className="flex space-x-2 text-sm bg-[#1e2732] p-3 rounded-xl">
                    <button onClick={() => setTwitterThemeTo('default')}  className={`${twitterTheme === 'default' ? "outline outline-blue-600" : ""} rounded-xl bg-[#314152] text-sm font-bold text-white px-3 py-2`} style={{ "borderColor":"border-color: rgb(51, 54, 57)"}}>Default</button>
                    <button onClick={() => setTwitterThemeTo('dim')} className={`${twitterTheme === 'dim' ? "outline outline-blue-600" : ""} rounded-xl bg-[#314152] text-sm font-bold text-white px-3 py-2`} style={{ "borderColor":"border-color: rgb(51, 54, 57)"}}>Dim</button>
                    <button onClick={() => setTwitterThemeTo('lights-out')} className={`${twitterTheme === 'lights-out' ? "outline outline-blue-600" : ""} rounded-xl bg-[#314152] text-sm font-bold text-white px-3 py-2`} style={{ "borderColor":"border-color: rgb(51, 54, 57)"}}>Lights Out</button>
                </div>
            </Widget>

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

         

        </div>
    )
}


export default SettingList;