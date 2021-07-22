import React,{useEffect, useState} from 'react'
import './style.css'
const getLocalData=()=>{
    const lists= localStorage.getItem("myTodoList");
    if(lists){
        return JSON.parse(lists);
    }
    return [];
}
const Todo = () => {
    const [inputData,setInputData]=useState("");
    const [items,setItems] =useState(getLocalData());
    const [isEditItem,setIsEditItem]=useState("");
    const [toggleButton,setToggleButton] = useState(false);
    // local storage
    useEffect(()=>{
            localStorage.setItem("myTodoList",JSON.stringify(items))
    })
    const addItem=()=>{
        if(!inputData){
            alert("please fill data");
        }else if(inputData && toggleButton){
                    setItems(
                        items.map((curEle)=>{
                            if(curEle.id===isEditItem){
                                return {...curEle,name:inputData}
                            }
                            return curEle;
                        })
                    )
                     setInputData("");
                    setIsEditItem(null);
                     setToggleButton(false);
        }
        else{
            const myNewInputData = {
                id:new Date().getTime().toString(),
                name:inputData
            }
            setItems([...items,myNewInputData]);
            setInputData("")
        }
    }
    const deleteItem=(id)=>{
        const newItem=items.filter((item)=>item.id!==id);
        setItems(newItem);
    }
    const removeAll=()=>(setItems([]));
    const editItem=(id)=>{
        const item_todo_edit=items.find((curele)=>{
            return curele.id===id;
        });
        setInputData(item_todo_edit.name);
        setIsEditItem(id);
        setToggleButton(true);
    }
    return (
        <>
         <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="/images/todo.svg" alt="" />   
                    <figcaption>Add you List here 🤝</figcaption> 
                </figure>    
                <div className="addItems">
                    <input type="text" placeholder="✍ Add Item"
                    className="form-control" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
                    {
                   
                    toggleButton?<i className="fas fa-edit add-btn" onClick={addItem} ></i>: <i className="fa fa-plus add-btn" onClick={addItem} ></i>
                         
                    }
                   
                </div>
                {/* show items */}
                <div className="show-items">
                    {
                        items.map((curEle,index)=>(
                        <div className='eachItem' key={curEle.id}>
                        <h3>{curEle.name}</h3>
                        <div className="todo-btn">
                    <i class="fas fa-edit" onClick={()=>editItem(curEle.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curEle.id)} ></i>
                        </div>
                    </div>
                        ))
                    }
                   
                </div>
                <div className="showItems">
                    <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>
                         Check List
                        </span>
                       </button>
                </div>
            </div>     
        </div>   
        </>
    )
}

export default Todo
