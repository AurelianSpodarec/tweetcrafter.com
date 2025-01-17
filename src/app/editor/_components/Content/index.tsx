'use client'

import { getFrameGradient, getFrameSelectedBackgroundColor, getFrameSelectedPattern } from "@/store/features/frame/frameSelectors"
import XPost from "./XPost"
import XProfile from "./XProfile"

interface IContent {
  className?: string
}

function Content({ className }: IContent) {

  const frameColor = getFrameSelectedBackgroundColor()
  const framePattern = getFrameSelectedPattern()
  const frameGradient = getFrameGradient()

  console.log("woow", frameGradient)

  return (
    <main
      className={`${className} ml-[75px] bg-[#121212] flex items-center justify-center bg-repeat`}
      style={{
        backgroundImage: `
          linear-gradient(45deg, #1d1d1d 25%, transparent 0),
          linear-gradient(-45deg, #1d1d1d 25%, transparent 0),
          linear-gradient(45deg, transparent 75%, #1d1d1d 0),
          linear-gradient(-45deg, transparent 75%, #1d1d1d 0)
        `,
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
        backgroundSize: '20px 20px',
      }}
    >
      {/* <div className="relative h-full w-full overflow-auto"> */}
      <div className="absolute overflow-y-auto scrollbar-main top-0 right-0 bottom-0 left-0 h-full w-full">

        <div className="flex items-center justify-center my-20">
          <div className="p-8">
            <div className={`text-white p-10 rounded-xl`} style={{ background: `url("${framePattern.backgroundImage}"), ${frameColor.hex}`}}>
              <div className="w-[600px]">
                <XProfile />
                {/* <XPost /> */}
              </div>
            </div>

          </div>
        </div>

        {/* </div> */}
      </div>
    </main>
  )
}

export default Content
