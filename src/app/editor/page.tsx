import Content from "./_components/Content"
import Header from "./_components/Header"
import Menu from "./_components/Menu"
import Widget from "./_components/Widget"

function Editor() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="flex h-full flex flex-row h-full overflow-hidden relative">
        <Menu />
        <div className="flex w-full flex-row">
          <Content className="flex grow flex-col overflow-hidden relative h-full" />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Editor
