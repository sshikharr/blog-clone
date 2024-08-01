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
    <div className="flex flex-row w-screen justify-center mt-6 gap-10">
        <div className="lg:w-4/6">
            <div className="text-5xl font-bold">
                    {title}
            </div>

            <div className="mt-8">
                   {formattedContent}
            </div>
        </div>



        <div className="flex flex-col gap-8 h-60 justify-center">
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