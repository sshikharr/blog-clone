
import { Link } from "react-router-dom";
import { BlogCardType } from "../types/types"

export const BlogCard = ({title, content, name, id}: BlogCardType)=>{
    let t;
    console.log(content.length)
    if(content.length<1000){
        t = '3';
    }else if(content.length<=1000 && content.length<2000){
        t='5';
    }else{
        t = '5+'
    }
    return(
        <>
            <Link to={`/blog/${id}`}>
            <div className="border-b-2 py-3 cursor-pointer">
                <div className="h-10">
                    <div className=" flex flex-row">
                        <div className="flex flex-col justify-center">
                            <div className="rounded-full flex flex-row justify-center bg-slate-400 w-6 h-6">{name[0]}</div>
                        </div>
                        <div className="flex flex-col justify-center ml-4">{name}</div>
                        <div className="flex flex-col align-middle ml-2 text-gray-400">.</div>
                    </div>
                </div>
                <div className="py-2">
                    <div className=" text-2xl font-bold">
                            {title}
                    </div>
                </div>
                <div>
                    <div className=" w-full h-auto lg:line-clamp-3 line-clamp-5">
                            {content}
                    </div>
                </div>
                <div>
                    <div className="mt-8 mb-8">
                        {t} min read
                    </div>
                </div>

            </div>
            </Link>
        </>
    )
}