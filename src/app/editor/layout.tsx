function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="overflow-hidden h-full">
      <div className="h-screen">
        {children}
      </div>
    </body>
  )
}

export default EditorLayout
