import Content from "./_components/Content"
import Header from "./_components/Header"
import Menu from "./_components/Menu"
import Widget from "./_components/Widget"

function Editor() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="h-full">
        <div className="flex h-full">
          <Menu />
          <Content className="flex w-full" />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Editor
