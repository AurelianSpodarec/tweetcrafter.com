'use client'

import { ReduxProvider } from './redux-provider'
import { ThemeProvider } from './theme-provider'

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default AppProvider
