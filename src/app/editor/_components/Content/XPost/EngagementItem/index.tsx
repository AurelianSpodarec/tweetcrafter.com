function EngagementItem({ children, count, className }: any) {
  return (
    <button type="button" className={`${className} cursor-pointer flex`}>
      <div className="flex justify-start items-center text-[15px]">
        <div className="w-[18.75px] h-[18.75px] fill-[#71767b]">
          {children}
        </div>
        {count &&
          <span className="font-chirp text-twitter-foreground text-[13px] px-1">{count}</span>
        }
      </div>
    </button>
  )
}

export default EngagementItem
