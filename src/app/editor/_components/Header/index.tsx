function Header() {
  return (
    <header className="bg-[#16151a] text-white py-4 px-4">
      <div className="flex items-center justify-between">

        <div>
          <h1>TweetCrafter</h1>
        </div>

        <div className="space-x-4">
          <button>
            Preview
          </button>
          <button>
            Download
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
