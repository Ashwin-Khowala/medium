import { Circle } from './BlogCard'

export default function Skeleton() {
    return (
        <div>
            <div className="border-b-1 border-slate-200 pb-4 pt-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex ">
                    <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="flex flex-col justify-center pl-2">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-500 text-sm flex flex-col justify-center">
                        <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    </div>
                </div>
                <div className="text-xl font-semibold ">
                    <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
                <div className="text-md font-thin ">
                    <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
                <div className="text-slate-500 text-sm font-thin pt-3">
                    <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
            </div>
        </div>
    )
}
