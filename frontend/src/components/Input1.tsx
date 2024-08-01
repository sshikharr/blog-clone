import { LabelledInputType } from "../types/types"

const Input1 = ({label, placeholder, onChange, type}: LabelledInputType)=>{
    return (
        <>
            <div className="py-3">
                <div className="mb-2">
                    {label}
                </div>
                <div>
                    <input placeholder={placeholder} className=" border-2 h-10 pl-3 w-full text-sm font-medium rounded-lg focus:border-blue-700" onChange={onChange} type={type || "text"}></input>
                </div>
            </div>
        </>
    )
}

export default Input1 