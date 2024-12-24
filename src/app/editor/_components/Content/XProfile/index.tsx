'use client'

import XDisplayName from "../XPost/XDisplayName"

function XProfile() {
  return (
    <div>
      <div className="bg-twitter-bg px-4">
        <svg
          aria-hidden="true"
          className="w-[20px] h-[20px] fill-[#eff3f4] leading-[20px]"
          color="#EFF3F4"
          viewBox="0 0 24 24"
        >
          <path d="m7.414 13 5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2z"></path>
        </svg>
        <XDisplayName name="SpaceX" fontSize="large" />
        9,581 posts
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://pbs.twimg.com/profile_banners/34743251/1681251194/1080x360)' }} />
        <img src="https://pbs.twimg.com/profile_banners/34743251/1681251194/1080x360" />
      </div>

      <section className="px-4 py-3 bg-twitter-bg">

        <div className="flex flex-row flex-wrap justify-between items-start">

          <div className="-mt-[15%] mb-3 z-10">
            <img className="w-[145px] h-[145px] rounded-[11px] border-[4px] border-black" src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg" />
          </div>

          <div className="flex items-end space-x-2">
            <button type="button" className="flex justify-center items-center min-w-[36px] min-h-[36px] rounded-full border border-[#536471] mb-3">
              <svg
                aria-hidden="true"
                className="fill-[#eff3f4] leading-[20px] w-[18.75px] h-[18.75]"
                color="#EFF3F4"
                viewBox="0 0 24 24"
              >
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"></path>
              </svg>
            </button>
            <button type="button" className="flex justify-center items-center min-w-[36px] min-h-[36px] rounded-full border border-[#536471] mb-3">
              <svg
                aria-hidden="true"
                className="fill-[#eff3f4] leading-[20px] w-[18.75px] h-[18.75px]"
                color="#EFF3F4"
                viewBox="0 0 24 24"
              >
                <path d="M10.25 3.75a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.781 4.781-1.414 1.414-4.781-4.781A8.5 8.5 0 0 1 1.75 10.25"></path>
              </svg>
            </button>
            <div className="mb-3">
              <button className="px-4 py-[7.5px] min-w-[36px] border border-[#FFF] bg-[#eff3f4] rounded-full text-[15px] font-chirp text-[#0F1419] leading-[20px] font-bold">
                <span>Follow</span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <XDisplayName name="SpaceX" fontSize="large" />
        </div>

        <div>
          <span>SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft</span>
        </div>

        <div>
          <span className="inline-block">
            <svg
              aria-hidden="true"
              className="h-[18.75px] w-[18.75px]"
              viewBox="0 0 24 24"
            >
              <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7m0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12m0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2m0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27"></path>
            </svg>
            <span className="inline">Earth</span>
          </span>
          <span className="inline-block">
            <svg
              aria-hidden="true"
              className="h-[18.75px] w-[18.75px]"
              viewBox="0 0 24 24"
            >
              <path d="M18.36 5.64a4.985 4.985 0 0 0-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41a4.985 4.985 0 0 0 0-7.07m-2.12 3.53-7.07 7.07-1.41-1.41 7.07-7.07zm-12.02.71 1.42-1.42 1.41 1.42-1.41 1.41a4.985 4.985 0 0 0 0 7.07 4.985 4.985 0 0 0 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9"></path>
            </svg>
            <span className="inline">spacex.com</span>
          </span>
          <span className="inline-block">
            <svg
              aria-hidden="true"
              className="h-[18.75px] w-[18.75px]"
              viewBox="0 0 24 24"
            >
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-12A2.5 2.5 0 0 1 5.5 4zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7zm0 6h2v-2H7zm0 4h2v-2H7zm4-4h2v-2h-2zm0 4h2v-2h-2zm4-4h2v-2h-2z"></path>
            </svg>
            <span className="inline">Joined April 2009</span>
          </span>
        </div>

        <div id="ProfileMetrics">
          120 Followers
          27.3M Followers
          1 Subscriptions
        </div>

        <div>
          Followed BY:
        </div>

        <div>
          We're Hiring
          <nav>
            <div>
              Title
              Location
            </div>
          </nav>
        </div>
      </section>

    </div>
  )
}

export default XProfile
