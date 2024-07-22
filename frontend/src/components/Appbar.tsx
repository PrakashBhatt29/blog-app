import { Link } from "react-router-dom"
import { AvatarLogo } from "./BlogCard"



export const Appbar =  ()=>{
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex justify-center flex-col font-semibold text-lg ">
        <div className="flex ">
            <div className="flex flex-col justify-center pr-1">
                <svg className="h-5 w-5 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
            </div>
            <div>
                Home
            </div>
        </div> 
        </Link >
        <div className="flex">
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4 focus:outline-none">
                <svg className="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                </button>
            </Link>
            <AvatarLogo/>
         </div>
    </div>
}
