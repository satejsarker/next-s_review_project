
'use client';
import { useState } from "react";
import {LinkIcon} from '@heroicons/react/20/solid'
export default function ShareLinkButton(){
    const [clicked, setClicked] = useState(false)
    const handelClick=()=>{
        navigator.clipboard.writeText(window.location.href)
        setClicked(true);
        setTimeout(()=>{
            setClicked(false)

        },1500)
    }
    console.log("button component rendering",clicked)
return(
    <button onClick={handelClick} 
    className="border flex gap-1 items-center  py-2 rounded bg-blend-saturation text-slate-500 text-sm  hover:bg-orange-100 hover:text-slate-700">
        <LinkIcon className="h-4 w-4"/>
    {clicked? 'Link Copied': 'Share Link'}
</button>
)
}