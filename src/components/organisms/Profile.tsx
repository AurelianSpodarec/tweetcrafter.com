import Avatar from "../atoms/Avatar"
import Stat from "../atoms/Stat"
import AvatarName from "../molecules/AvatarName"

// import React, { useCallback, useEffect, useRef } from 'react';
// import { toPng } from 'html-to-image';

function Profile(props:any) {
  const {
    data: {
      name,
      handler,
      location,
      description,
      url,
      type,
      created_at,
      profile_avatar,
      profile_banner,
      following_count,
      followers_count,
    },
  } = props;


//   useEffect() 
  
//   const ref = useRef(null);

//     const onButtonClick = useCallback(() => {
//         if (ref.current === null) return

//             toPng(ref.current, { cacheBust: false, })
//             .then((dataUrl) => {
//                 const link = document.createElement('a')
//                 link.download = 'my-image-name.png'
//                 link.href = dataUrl
//                 link.click()
//                 console.log("url", dataUrl)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
            
//     }, [ref])

// console.log("reff", ref.current)

  return (
    <>
      <article  className="bg-skin-base w-[598px] max-w-[598px]">
            <div>
                <img src={profile_banner} />
                {/* <img src="/images/bannerKIM.jfif" /> */}
                {/* <img src="https://pbs.twimg.com/profile_images/1606699867023319042/X3uHbFVm_400x400.jpg" /> */}
            </div>
            <section className="pt-3 px-4 pb-0 mb-4">
                
                <div className="flex justify-between">
                    <div style={{ "marginTop": "-15%" }}>
                        <Avatar src={profile_avatar} size="lg" type={type} />
                    </div>
                    <div className="space-x-2 flex flex-wrap align-center">
                        <button className="p-1 rounded-full" style={{"border": "1px solid", "borderColor": "rgb(83, 100, 113)", "height": "36px", "width": "36px"}}>
                            <svg className="m-auto fill-white h-full w-full" style={{"height": "18.75px", "width": "18.75px"}} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                        </button>
                        <button className="p-0.5 rounded-full" style={{"border": "1px solid", "borderColor": "rgb(83, 100, 113)", "height": "36px", "width": "36px"}}>
                            <svg className="m-auto fill-white h-full w-full" style={{"height": "18.75px", "width": "18.75px"}} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                        </button>
                        <button style={{ "fontSize": "15px", "height": "36px", "lineHeight": "1.5px"}} className="bg-[#eff3f4] font-bold rounded-full py-2.5 px-4">Follow</button>
                    </div>
                </div>
                
                <div className="mt-3">    
                    <AvatarName name={name} handler={handler} verified={type}/>
                </div>

                <div className="text-gray-300">
                    <p className="text-skin-base" style={{ "fontSize": "15px"}}>{description}</p>
                </div>

                <div className="flex flex-row text-gray-300 my-2 space-x-3">
                    <div className="flex items-center">
                        <svg style={{"fill": "#71767B", "height": "18.75px", "width": "18.75px"}} viewBox="0 0 24 24" aria-hidden="true" className="mr-1 text-skin-muted"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg>
                        <span style={{ "fontSize": "15px"}} className="text-skin-muted">{location}</span>
                    </div>
                    <div className="flex items-center">
                        <svg style={{"fill": "#71767B", "height": "18.75px", "width": "18.75px"}}  viewBox="0 0 24 24" aria-hidden="true" className="mr-1 text-skin-muted"><g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g></svg>
                        <span style={{ "fontSize": "15px"}} className="text-skin-accent">{url}</span>
                    </div>
                    <div className="flex items-center">
                        <svg style={{"fill": "#71767B", "height": "18.75px", "width": "18.75px"}}  viewBox="0 0 24 24" aria-hidden="true" className="mr-1 text-skin-muted"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg>
                        <span style={{ "fontSize": "15px"}} className="text-skin-muted">Joined {created_at}</span>
                    </div>
                </div>

                <div className="flex flex-row space-x-5">
                    <Stat amount={following_count} name="Following" />
                    <Stat amount={followers_count} name="Followers" />
                </div>

                <p className="text-skin-muted mt-3" style={{"fontSize": "13px"}}>Not followed by anyone you{'’'}re following</p>
            </section>
        </article>
        </>
    )
}

export default Profile;