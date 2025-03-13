import React from 'react'

export default function AppBar() {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
         <div className="flex flex-col justify-center text-xl font-semibold">
            Medium
         </div>
         <div className="">
            <Avatar authorName="Ashwin Khowala" />
         </div>
    </div>
  )
}

function Avatar({ authorName }: { authorName: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-600 rounded-full ">
            <span className="text-xs text-gray-600 font-extralight dark:text-gray-300">
                {authorName.split(" ").map((name) => name[0]).join("")}
            </span>
        </div>
    )
}