'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DashboardThemeNames, TwitterThemeNames, TwitterThemePrimary } from './themeNames';
import ModeToggle from './ModeToggle';

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;
const themeValues = Object.values(DashboardThemeNames);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [twitterTheme, setTwitterTheme] = React.useState(TwitterThemeNames.Default);
  const [twitterPrimaryTheme, setTwitterPrimaryTheme] = React.useState(TwitterThemePrimary.Blue)

  const handleTwitterThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTwitterTheme(event.target.value as TwitterThemeNames);
  };

  const handleTwitterPrimaryThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTwitterPrimaryTheme(event.target.value as TwitterThemePrimary);
  };

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={themeValues}
    >
      <div className={`${twitterTheme} ${twitterPrimaryTheme}`}>
        <header className="fixed top-0 z-50 bg-gray-800 p-4">
          <ModeToggle />

          <label className="block text-white mt-4">Twitter Theme</label>
          <select
            onChange={handleTwitterThemeChange}
            value={twitterTheme}
            className="block w-full bg-gray-900 text-white rounded mt-2"
          >
            {Object.values(TwitterThemeNames).map(theme => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>

          <div>
            <select
              onChange={handleTwitterPrimaryThemeChange}
              value={twitterPrimaryTheme}
              className="block w-full bg-gray-900 text-white rounded mt-2"
            >
              {Object.values(TwitterThemePrimary).map(theme => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>
        </header>

        <main className="pt-20">
          {children}

          {/* Example Section */}
          <div className="p-4 fixed bottom-0 bg-green-500 ">
            <div className="text-twitter-primary bg-twitter-card font-bold p-4 rounded mb-4 shadow">
              Twitter Card: Styled with Twitter Theme
            </div>
            <div className="text-primary bg-secondary p-4 rounded shadow">
              Dashboard Card: Styled with Dashboard Theme
            </div>
          </div>
        </main>
      </div>
    </NextThemesProvider>
  );
}
