import { Link } from "react-router-dom"

interface BlogCardpropsType{
    id: number
    authorname: string
    title: string
    content: string
    publishDate: string
};

export const BlogCard= ({
    id,
    authorname, 
    title, 
    content, 
    publishDate
    }:BlogCardpropsType) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">   
                    <Avatar size="small" name={authorname}/> 
                    <div className="font-thin pl-2 text-sm flex justify-center flex-col">
                        {authorname}
                    </div>
                    <div className="flex justify-center flex-col pl-2 ">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
                        {publishDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}  
                </div>
                <div className="text-md font-thin">
                    {content.slice(0,100)+"..."}
                </div>
                <div className=" text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length /100)} minute(s) read`}
                </div>
        </div>
    </Link>
}

export function Circle(){
    return <div className="w-1 h-1 bg-slate-500 rounded-full ">

    </div>
}

export function Avatar({name , size="small"}:{ name : string , size?: "small" | "big"}){
    return <div>
         <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size ==="small"? "w-6 h-6": "w-10 h-10"}`}>
                <span className={`${size === "small"?"text-xs":"text-md"} font-extralight text-gray-600 dark:text-gray-300`}>{name[0]} </span>
            </div>
    </div>
}

export function AvatarLogo (){
    return <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
    </div>
    
}
