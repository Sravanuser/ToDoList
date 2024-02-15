import React,{useState} from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Updated({setpop,change,setui}) {
  const [input,setinput] = useState(change.text);
  async function close(){
    const response = await fetch(`http://localhost:5000/update/${change.id}`,{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({toDo:input})
    });
    setui(prev=>!prev);
    setpop(false);
  }
    return (
    <div className='update_box'>
    <div className='update_fields'>
        <input  type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
        <IoMdAddCircleOutline size={30} className='add close' onClick={close}/>
        <IoMdCloseCircleOutline size={30} className='add cross' onClick={()=>setpop(false)}/>
    </div>
    </div>
  )
}
