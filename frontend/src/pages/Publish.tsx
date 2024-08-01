import { useState } from "react";
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = ()=>{
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    const inputValue = {
        title,
        content
    }
    const onClick = ()=>{
        axios.post(`${BACKEND_URL}/api/v1/blog`,inputValue,
        {headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }})
            navigate('/blogs')
    }
    return(<>
        <Appbar/>
        <div className=" grid grid-cols-1 gap-10 p-20 "> 
            <div className=" md:text-4xl font-bold text-xl">Publish your blog</div>
            <div className="">
            <div>
                <input
                    className="block p-4 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-center leading-tight font-semibold text-2xl text-gray-500 h-10"
                    placeholder="TITLE"
                    onChange={(e)=>setTitle(e.target.value)}
                ></input>
            </div>
            </div>
            <div>
                <div className="py-3">
                <div className="mb-2 text-2xl font-semibold text-gray-700">
                    <label htmlFor="content">Blog Content</label>
                </div>
                <textarea
                    id="content"
                    rows={10}
                    placeholder="Write your content here..."
                    className="block p-4 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm leading-tight text-gray-500"
                    onChange={(e)=>setContent(e.target.value)}
                />
            </div>
            <div className="py-3">
                <button
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800" 
                    onClick={onClick}
                >
                    Publish Post
                </button>
            </div>
            </div>
        </div>
        
    </>
    )}