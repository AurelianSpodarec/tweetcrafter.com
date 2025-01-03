'use client'

import { useDispatch } from "react-redux"
import dataColors from "./data-colors"
import { setBackgroundColor } from "@/store/features/frame/frameSlice"
import { getFrameSelectedBackgroundColor } from "@/store/features/frame/frameSelectors"

function DisplayColors() {
  const dispatch = useDispatch()

  const frameColor = getFrameSelectedBackgroundColor()
  // console.log(frameColor)
  return (
    <div>
      Colors
      {Object.entries(dataColors).map(([categoryKey, category]) => (
        <div key={categoryKey} style={{ marginBottom: "20px" }}>
          <h2 className="font-semibold">{category.name} Palette</h2>
          <div className="flex flex-wrap gap-2">
            {category.colors.map((color, index) => (
              <button
                key={color.name}
                type="button"
                onClick={() => dispatch(setBackgroundColor(color))}
                className={`h-7 w-7 rounded-full border border-solid border-white border-opacity-[35%]`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayColors
