import React,{useEffect} from 'react'
import { useState } from 'react'
import "./style.css"
const UseFeect = () => {
    const [val,setVal]=useState(0);
    useEffect(()=>{
        document.title=`Chats${val}`
    })
    return (
         <>
         <div className="center_div"  >
             <p>{val}</p>
            <div className="button2" onClick={()=>setVal(val+1)} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    INCR
            </div>
        </div>   
        </>
    )
}

export default UseFeect
