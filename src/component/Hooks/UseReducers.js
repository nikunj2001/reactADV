import React,{useState,useReducer} from 'react'
import './style.css'
const reducer = (state,action)=>{
    if(action.type==="INCR"){
            state=state+1;
    }
    if(action.type==="DECR"){
        if(state>0){
            state=state-1;
        }else{
            state=0
        }
    }
    return state;
}
const UseReducers = () => {
    const initialData=10;
    //  const [val,setVal]=useState(0);
    const [state,dispatch]=useReducer(reducer,initialData);
    return (
        <>
         <div className="center_div"  >
             <p>{state}</p>
            <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    INCR
            </div>
            <div className="button2" onClick={()=>dispatch({type:"DECR"})} >
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

export default UseReducers
