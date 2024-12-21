'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DashboardThemeNames, TwitterThemeNames, TwitterThemePrimary } from './themeNames';
import ModeToggle from './ModeToggle';
import { TwitterThemeProvider, useTwitterThemeContext } from './tw-theme-provider';

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;
const themeValues = Object.values(DashboardThemeNames);

export function ThemeProvider({ children }: ThemeProviderProps) {
  // const [twitterTheme, setTwitterTheme] = React.useState(TwitterThemeNames.Default);
  // const [twitterPrimaryTheme, setTwitterPrimaryTheme] = React.useState(TwitterThemePrimary.Blue)

  // const handleTwitterThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTwitterTheme(event.target.value as TwitterThemeNames);
  // };

  // const handleTwitterPrimaryThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTwitterPrimaryTheme(event.target.value as TwitterThemePrimary);
  // };


  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={themeValues}
    >
      <TwitterThemeProvider>

          {children}

          {/* Example Section */}
          <div className="p-4 fixed right-1/2 bottom-0 bg-green-500 ">
            <div className="text-twitter-primary bg-twitter-card font-bold p-4 rounded mb-4 shadow">
              Twitter Card: Styled with Twitter Theme
            </div>
            <div className="text-primary bg-secondary p-4 rounded shadow">
              Dashboard Card: Styled with Dashboard Theme
            </div>
          </div>


      </TwitterThemeProvider>
    </NextThemesProvider>
  );
}
