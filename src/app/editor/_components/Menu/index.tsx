import Drawer from "./Drawer"
import settingsMenu from "./settingsMenu"
import settingsTypes from "./settingsTypes"

function Item({ item }: { item: any }) {
  return (
    <button type="button" className="w-[55px] h-[55px] hover:bg-gray-200/20 cursor-default">
      <div className="flex flex-col align-center justify-center items-center">
        <div className="h-6 w-6">
          {item.icon}
        </div>
        <span className="text-[11px]">
          {item.name}
        </span>
      </div>
    </button>
  )
}

function Menu() {
  return (
    <>
      <aside className="bg-red-500 w-[55px] z-10">
        <div className="flex flex-cols justify-between">
          <div>
            {settingsMenu.menu.map((item) => <Item item={item} />)}
          </div>
        </div>
      </aside>
      <Drawer />
    </>
  )
}

export default Menu
