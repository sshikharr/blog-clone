import { ButtonTypes } from "../types/types"

const Button1 = ({text, onClick}: ButtonTypes)=>{
    return (
        <>
            <div className="">
                <button onClick={onClick} className=" h-10 pl-3 w-full text-sm font-medium rounded-lg bg-black text-white">{text}</button>
            </div>
        </>
    )
}

export default Button1