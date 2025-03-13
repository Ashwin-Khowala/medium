import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

interface Blog{
  "content":string;
  "title":string;
  "id":string;
  "author":{
    "name":string;
  }
}

export default function Blogs() {
  const {loading,blogs}=useBlogs();

  if(loading){
    return(
      <div>
        <BlogCard authorName="" title="" publishedDate="" description=""/>
        <BlogCard authorName="" title="" publishedDate="" description=""/>
        <BlogCard authorName="" title="" publishedDate="" description=""/>
        <BlogCard authorName="" title="" publishedDate="" description=""/>
      </div>
    )
  }


  return (<>
    <AppBar />
    <div className="flex justify-center pl-2">
      <div className="max-w-xl">
        {blogs:Blog.map(blog=>
          <BlogCard title={blog.title} description={blog.content} authorName={blog.author.name} publishedDate="12-12-12"/>
        )}
      </div>
    </div>
  </>
  )
}

