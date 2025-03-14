import React from 'react'
import { Link } from 'react-router-dom'

export default function AppBar() {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
      <Link to={`/blogs`}>
        <div className="flex flex-col justify-center text-2xl font-bold cursor-pointer">
          Medium
        </div>
      </Link>
      <div>
        <Link to={`/publish`}>
          <button type="button" className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New Blog</button>
        </Link>

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