
interface BlogCardProps {
    authorName: string;
    title: string;
    description: string;
    publishedDate: string;
}

export default function BlogCard({ authorName, title, description, publishedDate }: BlogCardProps) {
    return (
        <div className="border-b-1 border-slate-200 pb-3">
            <div className="flex ">
                <div className="flex justify-center flex-col">
                    <Avatar authorName={authorName}/> 
                </div>
                <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
                    {authorName} 
                </div>
                <div className="flex flex-col justify-center pl-2">
                    <Circle/>
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex flex-col justify-center">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold ">
                {title}
            </div>
            <div className="text-md font-thin ">
                {description.slice(0, 100)}...
            </div>
            <div className="text-slate-500 text-sm font-thin pt-3">
                {`${Math.ceil(description.length / 100)} min read`}
            </div>
        </div>
    )
}

function Circle() {
    return(
        <div className="h-1 w-1 rounded-full bg-slate-500">
        </div>
    )
}


function Avatar({ authorName }: { authorName: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full ">
            <span className="text-xs text-gray-600 font-extralight dark:text-gray-300">
                {authorName!=null?authorName.split(" ").map((name) => name[0]).join(""):""}
            </span>
        </div>
    )
}