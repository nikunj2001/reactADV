import React,{useState} from 'react'
import './style.css'
const UseState = () => {
      const [val,setVal]=useState(0);

    return (
        <>
         <div className="center_div"  >
             <p>{val}</p>
            <div className="button2" onClick={()=>setVal(val+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    INCR
            </div>
            <div className="button2" onClick={()=> val>0? setVal(val-1):setVal(0)} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
        </div>   
        </>
    )
}

export default UseState
