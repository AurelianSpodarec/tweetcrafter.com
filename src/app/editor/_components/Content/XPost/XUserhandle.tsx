interface IXUserHandle {
  name: string
}

function XUserHandle({ name }: IXUserHandle) {
  return (
    <span className="text-[15px] font-chirp font-thin text-[#71767b] ml-1">{name}</span>
  )
}

export default XUserHandle
