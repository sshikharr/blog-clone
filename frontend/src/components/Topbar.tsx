import { useNavigate } from "react-router-dom"

export const Topbar = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className=" p-12 ">
            <div className=" flex flex-row justify-start  border-b-2 gap-7 items-baseline pb-4">
            <button className=" text-xl text-gray-400 font-extralight hover:bg-slate-600 rounded-full w-8 h-8 flex flex-row justify-center cursor-pointer" onClick={()=>{
                navigate('/publish')
            }}>
                <div className="flex flex-col justify-center">
                    +
                </div>
                </button>
            <div>For you</div>
            </div>
        </div>
        </>
    )
}