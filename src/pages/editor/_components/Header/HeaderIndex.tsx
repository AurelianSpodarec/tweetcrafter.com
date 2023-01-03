import React, { useCallback, useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import { useTwitterEditor } from '../../../../context/TwitterEditorInfo';

function HeaderIndex() {
    // @ts-ignore
    const { refHTML } = useTwitterEditor()

    const onButtonClick = useCallback(() => {
        if (refHTML.current === null) return

            toPng(refHTML.current, { cacheBust: false, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
                console.log("url", dataUrl)
            })
            .catch((err) => {
                console.log(err)
            })
            
    }, [refHTML])

    return (
        <header className="bg-[#2b3140] w-full flex justify-between items-center h-14">
            <div className="p-2">
                <h1 className="text-2xl text-gray-300 font-bold">TweetCrafter</h1>
            </div>
            <div className="space-x-2 flex items-center h-full p-2 pl-4 bg-[#2e3c4c]">

                <button className="text-white">
                    Post Size: Twitter 
                    | Instagram | Facebook | Custom
                </button>
                

                <button onClick={() => onButtonClick()} className="text-gray-300 bg-[#3f5264] rounded-md text-sm px-3 h-full w-auto">Download Image</button>
                {/* <button className="text-gray-300 bg-[#3f5264] rounded-md text-sm px-3 h-full w-auto">Preview Image</button> */}
                <button className="text-gray-300 bg-[#3cacd7] rounded-md text-sm px-3 h-full w-auto">Share</button>
            </div>
        </header>
    )
}

export default HeaderIndex;