function ItemType({ item }: any) {
  return (
    <div className="text-black">
      {item.name}
      <img src={item.thumbnail} className="w-full" />
    </div>
  )
}

export default ItemType
