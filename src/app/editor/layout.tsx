import AppProvider from "@/providers"
import { chirp } from "@/components/twitter/fonts"

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={`overflow-hidden h-full ${chirp.variable}`}>
      <AppProvider>
        <div className="h-screen">
          {children}
        </div>
      </AppProvider>
    </body>
  )
}

export default EditorLayout
