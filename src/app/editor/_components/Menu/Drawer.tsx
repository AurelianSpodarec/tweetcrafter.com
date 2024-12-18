import settingsTypes from "./settingsTypes"

function ItemType({ item }: any) {
  return (
    <div className="text-black">
      {item.name}
      <img src={item.thumbnail} className="w-full" />
    </div>
  )
}

function Drawer() {
  return (
    <div className="h-full w-[400px] left-[55px] bg-white z-10 overflow-auto">
      Search
      <div className="overflow-auto">
        {settingsTypes.map((item) => <ItemType item={item} />)}
      </div>
    </div>
  )
}

export default Drawer
