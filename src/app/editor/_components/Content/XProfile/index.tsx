'use client'

import dataXUsers from "@/components/features/XUsers/dataXUsers"
import XDisplayName from "../XPost/XDisplayName"
import XProfileBanner from "./XProfileBanner";

function formatNumber(num) {
  const scales = ['', 'K', 'M', 'B', 'T', 'P', 'E']; // Add more as needed
  const tier = Math.floor(Math.log10(Math.abs(num)) / 3); // Determine the tier (thousands, millions, etc.)

  if (tier === 0) return num.toString(); // No formatting needed for numbers < 1,000

  const scale = scales[tier] || ''; // Get the suffix for the tier
  const scaledNum = Math.floor(num / Math.pow(10, tier * 3 - 1)) / 10; // Truncate to one decimal place

  return scaledNum + scale; // Add the suffix
}

function XPostsCount({ count }) {
  return (
    <span className="text-[#71767b] font-chirp text-[13px] leading-[16px]">{formatNumber(count)} posts</span>
  )
}

function XProfile() {
  const user = dataXUsers[24]
  // console.log(user.ext_verified_type)
  return (
    <div>
      <div className="flex items-center bg-twitter-bg px-4 h-[53px]">
        <div className="min-w-[56px]">
          <svg
            aria-hidden="true"
            className="w-[20px] h-[20px] fill-[#eff3f4] leading-[20px] item-end"
            color="#EFF3F4"
            viewBox="0 0 24 24"
          >
            <path d="m7.414 13 5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2z"></path>
          </svg>
        </div>
        <div className="flex flex-col align-center">
          <XDisplayName name={user.name} fontSize="profileHeader" verifyBlue={user.ext_is_blue_verified} verifyType={user.ext_verified_type} />
          <XPostsCount count={user.statuses_count} />
        </div>
      </div>

      <XProfileBanner src={user.profile_banner_url} />

      <section className="px-4 py-3 bg-twitter-bg">

        <div className="flex flex-row flex-wrap justify-between items-start">

          <div className="-mt-[15%] mb-3 z-10">
            <img className="w-[145px] h-[145px] rounded-[11px] border-[4px] border-black" src={user.profile_image_url_https} />
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
          <XDisplayName name={user.name} fontSize="large" verifyBlue={user.ext_is_blue_verified} verifyType={user.ext_verified_type} />
        </div>

        <div>
          <span>{user.description}</span>
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
