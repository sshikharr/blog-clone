import { Link } from "react-router-dom"
import { HeadingLabels } from "../types/types"

const Heading1 = ({heading, text, to, text2}: HeadingLabels)=>{
    return (
        <>
            <div>
                <div className=" text-3xl tracking-normal font-extrabold">
                    {heading}
                </div>
                <div className=" text-sm font-normal p-1 flex flex-row justify-center">
                    <div className="text-gray-500 ">
                        {text}
                    </div>
                    <Link to={to} className="ml-1 text-gray-500 underline">{text2}</Link>
                </div> 
            </div>
        </>
    )
}

export default Heading1