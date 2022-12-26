import AvatarName from "../molecules/AvatarName";

function Complementary({data}:any) {
    if(!data) return <></>
    
    return (
        <div className="w-[348px] bg-black">
            <div>
                <h3>Relevant People</h3>
                <div className="p-4">
                    <div className="flex flex-row">
                        <AvatarName name={data.name} handler={data.handler} src={data.profile_avatar} />
                        <button className="bg-[#eff3f4] font-bold rounded-full py-2.5 px-4" style={{ "fontSize": "15px", "height": "36px", "lineHeight": "1.5px" }}>Follow</button>
                    </div>
                    <p className="text-skin-base">Creator of @tailwindcss. Listener of Slayer. Austin 3:16.</p>
                </div>
            </div>
        </div>
    )
}

export default Complementary;