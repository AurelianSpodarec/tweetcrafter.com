interface IContent {
  className?: string
}

function BadgeVerifyGold() {
  return (
    <svg
      aria-label="Verified account"
      className="w-[18.75px] h-[18.75px] ml-0.5"
      data-testid="icon-verified"
      viewBox="0 0 22 22"
    >
      <linearGradient
        id="89-a"
        x1="4.411"
        x2="18.083"
        y1="2.495"
        y2="21.508"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f4e72a"></stop>
        <stop offset="0.539" stopColor="#cd8105"></stop>
        <stop offset="0.68" stopColor="#cb7b00"></stop>
        <stop offset="1" stopColor="#f4ec26"></stop>
        <stop offset="1" stopColor="#f4e72a"></stop>
      </linearGradient>
      <linearGradient
        id="89-b"
        x1="5.355"
        x2="16.361"
        y1="3.395"
        y2="19.133"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f9e87f"></stop>
        <stop offset="0.406" stopColor="#e2b719"></stop>
        <stop offset="0.989" stopColor="#e2b719"></stop>
      </linearGradient>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="url(#89-a)"
          d="M13.324 3.848 11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575 3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
        ></path>
        <path
          fill="url(#89-b)"
          d="M13.101 4.533 11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89 3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
        ></path>
        <path
          fill="#d18800"
          d="m6.233 11.423 3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z"
        ></path>
      </g>
    </svg>
  )
}

function XPostDate() {
  return (
    <span className="text-[15px] font-chirp font-thin text-[#71767b]">Dec 18</span>
  )
}

function XAvatar() {
  return (
    <img className="h-10 w-10 rounded-[3px]" src="https://pbs.twimg.com/profile_images/1697749409851985920/HbrI04tM_bigger.jpg" />
  )
}

function EngagementItem({ children, count, className }: any) {
  return (
    <button type="button" className={`${className} cursor-pointer flex`}>
      <div className="flex justify-start items-center text-[15px]">
        <div className="w-[18.75px] h-[18.75px] fill-[#71767b]">
          {children}
        </div>
        {count &&
          <span className="font-chirp text-[#71767b] text-[13px] px-1">{count}</span>
        }
      </div>
    </button>
  )
}

function EngagementBar() {
  return (
    <div className="flex justify-between flex-row gap-1 mt-3 max-w-[600px]">

      <EngagementItem className="flex-[1]" count={34}>
        <svg
          aria-label="Comments"
          viewBox="0 0 24 24"
          className="h-full w-full"
        >
          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366a8.13 8.13 0 0 1 8.129 8.13c0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067A8.005 8.005 0 0 1 1.751 10m8.005-6a6.005 6.005 0 1 0 .133 12.01l.351-.01h1.761v2.3l5.087-2.81A6.127 6.127 0 0 0 14.122 4z"></path>
        </svg>
      </EngagementItem>

      <EngagementItem className="flex-[1]" count={6}>
        <svg
          aria-label="Repost"
          viewBox="0 0 24 24"
          className="h-full w-full"
        >
          <path d="m4.5 3.88 4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5a4 4 0 0 1-4-4V7.55L1.432 9.48.068 8.02zM16.5 6H11V4h5.5a4 4 0 0 1 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2"></path>
        </svg>
      </EngagementItem>

      <EngagementItem className="flex-[1]" count={84}>
        <svg
          aria-label="Like"
          viewBox="0 0 24 24"
          className="h-full w-full"
        >
          <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5a3.44 3.44 0 0 0-2.91 1.91c-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82a3.44 3.44 0 0 0-2.908-1.91m4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67a5.42 5.42 0 0 1 4.601-3.01c1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01a5.42 5.42 0 0 1 4.601 3.01c.896 1.81.846 4.17-.514 6.67"></path>
        </svg>
      </EngagementItem>

      <EngagementItem className="flex-[1]" count={501}>
        <svg
          aria-label="Post Analytics"
          viewBox="0 0 24 24"
          className="h-full w-full"
        >
          <path d="M8.75 21V3h2v18zM18 21V8.5h2V21zM4 21l.004-10h2L6 21zm9.248 0v-7h2v7z"></path>
        </svg>
      </EngagementItem>

      <EngagementItem className="flex-shrink-0 ">
        <svg
          aria-label="Bookmark"
          viewBox="0 0 24 24"
          className="h-full w-full"
        >
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v18.44l-8-5.71-8 5.71zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5z"></path>
        </svg>
      </EngagementItem>

      <EngagementItem>
        <svg
          aria-label="Share"
          viewBox="0 0 24 24"
          className="h-full w-full"
        >
          <path d="m12 2.59 5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15z"></path>
        </svg>
      </EngagementItem>
    </div>
  )
}

function XUserLabel() {
  return (
    <div className="flex">
      <div className="flex items-center">
        <span className="text-[15px] font-chirp font-bold text-[#e7e9ea]">SpaceX</span>
        <BadgeVerifyGold />
      </div>
      <span className="text-[15px] font-chirp font-thin text-[#e7e9ea] ml-1">@SpaceX</span>
    </div>
  )
}

function XPost() {
  return (
    <article className="flex bg-[#000000] font-chirp text-[15px] py-3 px-4">
      <div className="flex flex-row">

        <div className="flex flex-col flex-basis-[40px] mr-2">
          <div>
            <XAvatar />
          </div>
          <div className="w-[2px] bg-[#333639] mt-1 flex-grow-[1px] mx-auto items-stretch flex-auto" />
        </div>
        <div>

          <div className="flex justify-between mb-0.5">
            <div className="flex align-center items-start">
              <XUserLabel />
              <div className="items-baseline">
                <div className="text-[#71767b]">
                  <span className="text-[#e7e9ea] px-1 font-thin font-chirp text-[15px] line-height-20">·</span>
                </div>
              </div>
              <XPostDate />
            </div>
            <div className="flex flex-row gap-2">
              <button>
                <svg
                  className="w-[18.75px] h-[18.75px] fill-[#71767b]"
                  viewBox="0 0 24 24"
                  aria-label="Explain this post"
                >
                  <g clipPath="url(#92-clip0_2592_269)" clipRule="evenodd">
                    <path d="M18 4.1H6A1.9 1.9 0 0 0 4.1 6v12c0 1.05.85 1.9 1.9 1.9h12a1.9 1.9 0 0 0 1.9-1.9V6A1.9 1.9 0 0 0 18 4.1M6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4"></path>
                    <path d="m6.68 17.8 8.108-11.58h2.532L9.21 17.8z"></path>
                  </g>
                  <defs>
                    <clipPath id="92-clip0_2592_269">
                      <rect width="20" height="20" x="2" y="2" rx="1"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button>
                <svg
                  className="w-[18.75px] h-[18.75px] fill-[#71767b]"
                  viewBox="0 0 24 24"
                  aria-label="More"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"></path>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <p className="font-chirp text-[#e7e9ea] font-medium leading-[20px]">Teams complete three successful Falcon 9 missions in under 24 hours</p>
          </div>

          <div className="mt-3">
            <div className="rounded-[16px] border border-[#2f3336] overflow-hidden">
              <img className="h-[344px] w-full object-cover" src="https://pbs.twimg.com/media/GfDPO-NW0AAo6Px?format=jpg&name=medium" />
            </div>
          </div>
          <EngagementBar />

        </div>

      </div>
    </article>
  )
}

function Content({ className }: IContent) {
  return (
    <main
      className={`${className} bg-[#121212] flex items-center justify-center bg-repeat`}
      style={{
        backgroundImage: `
          radial-gradient(circle, #0e0e0f 5%, transparent 50%),
          radial-gradient(circle, #0e0e0f 5%, transparent 50%)
        `,
        backgroundPosition: '0 0, 10px 10px',
        backgroundSize: '20px 20px'
      }}
    >
      {/* <div className="relative h-full w-full overflow-auto"> */}
      <div className="absolute overflow-y-auto scrollbar-main top-0 right-0 bottom-0 left-0 h-full w-full">

        <div className="flex items-center justify-center my-20">
          <div className="bg-purple-500/0 p-8 w-[630px]">
            {/* <article className="text-white w-[570px] h-[900px] bg-pink-500">
              Article
            </article> */}
            <XPost />

          </div>
        </div>

        {/* </div> */}
      </div>
    </main>
  )
}

export default Content
