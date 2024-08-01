import Heading1 from "../components/Heading1"
import Input1 from "../components/Input1"
import Button1 from "../components/Button1"
import { useState } from "react"
import { SignupType } from "sshikharr-blog-clone"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signup = ()=>{
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState<SignupType>({
        email: "",
        name: "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputValues);
            const jwt = response.data;
            localStorage.setItem("token", jwt.token);
            navigate('/blogs')
        }catch(err){
            alert(`Couldn't create user`)
        }
    }
    return<>
        <div className=" h-screen w-screen flex flex-row ">
            <div className=" lg:p-4 lg:font-bold lg:w-1/2 w-full">
            <div className="h-full flex flex-row justify-center">
                <div className="h-full flex flex-col justify-center w-4/6">
                    <div className="flex flex-row justify-center text-center">
                        <Heading1 heading="Create an account" text="Already have an account?" to="/signin" text2="Login"/>
                    </div>        
                    <div>
                        <div><Input1 label="Name" placeholder="Enter your name" onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                name: e.target.value
                            })
                        }}/></div>
                        <div><Input1 label="Email" placeholder="example@mail.com" onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                email: e.target.value
                            })
                        }}/></div>
                        <div><Input1 label="Password" placeholder="Enter the password" type="password" onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                password: e.target.value
                            })
                        }}/></div>
                    </div>
                    <div>
                        <div>
                            <Button1 text="Signup" onClick={sendRequest}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="lg:p-4 lg:w-1/2 lg:bg-slate-200 lg:flex lg:flex-col lg:justify-center hidden">
                <div className=" flex flex-row justify-center">
                    <div className="w-4/6 font-semibold text-2xl">
                        <div>Your future is shaped by the choices you make today. Start now, and every step you take will bring you closer to your dreams. Embrace the journey, and let each moment be a step toward creating the life you envision.</div>
                    <div className="mt-4 font-light text-lg">
                        - Unknown
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}
