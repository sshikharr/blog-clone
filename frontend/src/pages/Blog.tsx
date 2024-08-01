import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

export const Blog = ()=>{
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if(loading){
    return <>
        <FullBlogSkeleton/>
    </>
   }

    if(!blog){
        return(<>
            <div>Blogs not found</div>
        </>)
    }
    
    return<>
        <FullBlog title={blog.title} content={blog.content} name={blog.author.name}/>
    </>
}
