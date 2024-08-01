
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { Topbar } from "../components/Topbar"
import { useBlogs } from "../hooks";

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();
    if(loading){
        return(<>
            <div className="w-screen">
        <div>
          <Appbar />
        </div>
        <div>
          <Topbar />
        </div>
        <div className="w-full grid grid-cols-1 justify-items-center">
          <div className="w-4/6 space-y-4">
            {[...Array(5)].map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
        </>)
    }
    return<>
    <div className="w-screen">
        <div>
            <Appbar/>
        </div>
        <div>
            <Topbar/>
        </div>
        <div className="w-full grid grid-cols-1 justify-items-center">
            
            <div className="w-4/6">
                {blogs.map((blog, index)=><BlogCard 
                key={index}
                title={blog.title}
                content={blog.content}
                name={blog.author.name}
                time="3"
                date="24 Nov, 2011"
                id={blog.id}
                />)}
            </div>
        </div>
    </div>
    </>
}

