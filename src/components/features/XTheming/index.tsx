'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";
import { TwitterThemeNames, TwitterThemePrimary } from "@/theming/themeNames";

function ThemeButton() {
  return (
    <button>

    </button>
  )
}

function ThemePrimaryButton() {
  return (
    <button>

    </button>
  )
}

function FeatureXTheming() {
  const isOpen = getNavigationStateOf("xtheme")

  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-[55px] w-[270px]`}>
      <div className="bg-[#0c0e11] relative h-full flex">
        <div className="overflow-auto px-4 space-y-4">


          <div className="flex flex-col">
            {Object.values(TwitterThemePrimary).map(theme => (
              <div key={theme}>
                {theme}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {Object.values(TwitterThemeNames).map(theme => (
              <div key={theme}>
                {theme}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FeatureXTheming;
