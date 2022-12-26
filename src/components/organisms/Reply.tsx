import Avatar from "../atoms/Avatar";
import AvatarName from "../molecules/AvatarName";

function Reply({data}:any) {
    if(!data) return <></>
    console.log("hiiiii", data.name)
    return (
        <article className="relative  bg-skin-base max-w-[598px]">
        <div className="p-4 flex flex-row align-stretch flex-auto">

            <div className="flex-none mr-3">
                {/* <div className="m-auto w-0.5 mt-1 h-full bg-[#333639]"></div> */}
                <Avatar src={data.profile_avatar} />
                <div className="m-auto w-0.5 mt-1 h-full bg-[#333639]"></div>
            </div>

            <div>

                <div className="flex flex-row justify-between items-center">
                    <AvatarName name={data.name} handler={data.handler} verified={data.type} option="reply" />
                    <div style={{ "height": "18.75px"}} className="w-auto">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-[#71767b] h-full w-full"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                    </div>
                </div>

                <span className="text-skin-muted">Replying to <span className="text-skin-accent">@adamwathan</span></span>
                <p className="text-skin-base">
                    We put just as much of our attention into the code on these templates as we did with the design.
                    <br/>
                    They are the absolute best way to learn how we build production-ready sites with Tailwind CSS and React ourselves 🤩
                </p>

                <div>
                    <div className="flex">
                        <div style={{ "height": "18.75px", "width": "18.75px"}}>
                            <svg viewBox="0 0 24 24" className="text-skin-base h-full w-full" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                        </div>
                        <span>3</span>
                    </div>
                </div>

            </div>

        </div>
        </article>
    )
}

export default Reply;