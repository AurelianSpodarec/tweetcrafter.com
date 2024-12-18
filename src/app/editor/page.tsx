'use client'

import Content from "./_components/Content"
import Header from "./_components/Header"
import Navigation from "./_components/Navigation"
import Widget from "./_components/Widget"

function Editor() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="flex h-full flex-row overflow-hidden relative">
        <Navigation />
        <div className="flex w-full flex-row">
          <Content className="flex grow flex-col overflow-hidden relative h-full" />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Editor
