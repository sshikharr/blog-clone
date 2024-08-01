import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { BlogFetched } from "../types/types";

export const useBlog = (id: {id: string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogFetched>();
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/get/${id.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                console.log(response.data)
                setLoading(false);
            })
    }, [id.id])
    return{
        loading,
        blog
    }
}

export const useBlogs = ()=>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogFetched[]>([]);
    useEffect(()=>{
        try{
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                console.log(response)
                setBlogs(response.data.blog);
                setLoading(false);
            })
        }catch(err){
            alert('Not Authorized')
        }
        
    }, [])
    return{
        loading,
        blogs
    }
}