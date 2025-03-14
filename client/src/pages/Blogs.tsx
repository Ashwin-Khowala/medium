import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import Skeleton from "../components/Skeleton";
import { useBlogs } from "../hooks";


export default function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <>
      <AppBar />
      <div className="flex justify-center">
        <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      </div>
      </>
    )
  }


  return (<>
    <AppBar />
    <div className="flex justify-center pl-2">
      <div>
        {blogs.map(blog =>
          <BlogCard
            id={blog.id}
            title={blog.title}
            description={blog.content}
            authorName={blog.author.name}
            publishedDate="12-12-12" />
        )}
      </div>
    </div>
  </>
  )
}

