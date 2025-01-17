'use client'

import { setFramePattern } from "@/store/features/frame/frameSlice"
import dataPatterns from "./data-patterns"
import { useDispatch } from "react-redux"
import { getFrameSelectedPattern } from "@/store/features/frame/frameSelectors"

function DisplayPatterns() {
  const dispatch = useDispatch()
  const framePattern = getFrameSelectedPattern()

  return (
    <div>
      {Object.entries(dataPatterns).map(([categoryKey, category]) => (
        <div key={categoryKey}>
          <h2>{category.name}</h2>
          Line Color
          Line Opacity
          <div className="grid grid-cols-2">
            {category.patterns.map((pattern, index) => {
              // console.log(pattern.backgroundImage)/
              return (
                <button
                  type="button"
                  onClick={() => dispatch(setFramePattern(pattern))}
                  key={index}
                  className={`h-32 w-full ${framePattern.name === pattern.name ? "shadow-[0px_0px_15px_0px_rgba(232,232,255,0.9)]" : ""}`}
                  style={{ background: `url("${pattern.backgroundImage}")`, backgroundSize: "70px" }}
                >
                  {pattern.name}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayPatterns
