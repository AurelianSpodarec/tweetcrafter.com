function ItemType({ item }: any) {
  return (
    <div className="text-black relative rounded overflow-hidden border border-dashed border-yellow-200/20 hover:border-yellow-200/50 transition-colors duration-75 ease-in-out cursor-pointer">
      <img src={item.thumbnail} className="w-full" />
      <span className="absolute bottom-2 left-2 text-white text-xs bg-gray-900/80 py-1 px-3 rounded-full">{item.name}</span>
    </div>
  )
}

export default ItemType
