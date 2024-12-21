'use client'

import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors";
import { TwitterThemeNames, TwitterThemePrimary } from "@/theming/themeNames";
import { useTwitterThemeContext } from "@/theming/tw-theme-provider";

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

  const { twitterTheme, setTwitterTheme, twitterPrimaryTheme, setTwitterPrimaryTheme } = useTwitterThemeContext();

  return (
    <div className={`${isOpen ? "" : "hidden"} absolute z-30 top-0 bottom-0 left-[55px] w-[200px]`}>
      <div className="bg-[#0c0e11] relative h-full flex">
        <div className="overflow-auto px-4 space-y-4">


          <div className="flex flex-col">
            {/* {Object.values(TwitterThemePrimary).map(theme => (
              <div key={theme} className="text-twitter-blue">
                {theme}
              </div>
            ))} */}

            <h3>Color</h3>
            <div className="grid grid-cols-3 gap-2 w-full bg-gray-900 text-white rounded mt-2">
              {Object.values(TwitterThemePrimary).map((theme) => {
                console.log(theme);
                const isActive = theme === twitterPrimaryTheme
                return (
                  <div
                    key={theme}
                    className={`p-2 h-10 w-10 rounded-lg cursor-pointer bg-${theme} ${isActive ? 'font-bold' : ''}`}
                    onClick={() => setTwitterPrimaryTheme(theme)}
                  >
                    {/* {theme} */}
                    {isActive ?
                      <svg
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-jwli3a r-6zzn7w r-q1j0wu"
                        viewBox="0 0 24 24"
                      >
                        <path d="m9.64 18.952-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32z"></path>
                      </svg>
                      : ""}
                  </div>
                );
              })}
            </div>

          </div>
          <h3>Background</h3>
          <div className="flex flex-col">
            {Object.values(TwitterThemeNames).map(theme => {
              const isActive = theme === twitterTheme
              return (
                <div key={theme} onClick={() => setTwitterTheme(theme)}>
                  {theme}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div >
  );
}

export default FeatureXTheming;
