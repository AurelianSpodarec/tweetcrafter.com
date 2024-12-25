function XProfileBanner({ src }) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="pb-[33.3333%]"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${src})` }} />
          <img src={`${src}`} />
        </div>
      </div>
    </div>
  )
}

export default XProfileBanner
