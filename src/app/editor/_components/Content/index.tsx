function Content({ className }) {
  return (
    <main className={`${className} bg-[#212025] flex items-center justify-center`}>

      <div className="relative h-full w-full overflow-auto">
        <div className="absolute overflow-y-auto top-0 right-0 bottom-0 left-0 h-full w-full">

          <div className="flex items-center justify-center my-20">
            <div className="bg-purple-500 p-8 w-[630px]">
              <article className="text-white w-[570px] h-[900px] bg-pink-500">
                Article
              </article>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}

export default Content
