import { Blog } from "../types/types"
import { Appbar } from "./Appbar"

export const FullBlog = ({title, content, name}: Blog)=>{
    const formattedContent = content
        .split('\n')
        .map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
        ));

    return <>
    <Appbar/>
    <div className="flex flex-row w-screen justify-center mt-6 gap-10 pl-3">
        <div className="md:w-4/6 w-full">
            <div className="md:text-5xl md:font-bold text-3xl font-bold">
                    {title}
            </div>

            <div className="flex flex-row gap-4 mt-6 md:hidden">
                    <div className="flex flex-col justify-center">
                        <div className="rounded-full flex flex-row justify-center bg-slate-400 w-6 h-6 ">{name[0]}</div>
                    </div>                   
                    <div className="text-xl font-bold flex flex-col justify-center">{name}</div>
                </div>

            <div className="mt-8">
                   {formattedContent}
            </div>
        </div>



        <div className="md:flex flex-col gap-8 h-60 justify-center hidden">
                <div className="font-semibold">
                    Author
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col justify-center">
                        <div className="rounded-full flex flex-row justify-center bg-slate-400 w-6 h-6">A</div>
                    </div>                   
                    <div className="text-2xl font-bold flex flex-col justify-center">{name}</div>
                </div>
        </div>
    </div>    
    </>
}