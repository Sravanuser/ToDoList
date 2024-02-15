import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

export default function ToDo({text,id,setui,setpop,setchange}) {
    async function Delete(){
        const response = await fetch(`http://localhost:5000/delete/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        setui(prev=>!prev);
    }
    function open(){
        setchange({text,id})
        setpop(true);
    }
    return (
        <div className='todo'>
            <div className='todo1'>
                <p>{text}</p>
            </div>
            <div className='todo2'>
                <TiTickOutline size={35} className='add update' onClick={open}/>
                <MdDeleteForever size={35} className='add delete' onClick={Delete}/>
            </div>
        </div>
    )
}
