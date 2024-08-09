import React, { useState } from 'react'

export default function Popup({setUpdate,setUpdateUI,pop}) {
    const [a,seta] = useState(pop.text);
    function close(){   
        setUpdate(false);
    }
    async function edit(){
        const res = await fetch(`http://localhost:5000/api/update/${pop.id}`,{
            method : "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({toDo:a})
        });
        setUpdate(false);
        setUpdateUI(prev=>!prev);
    }
  return (
    <div className='pop'>
        <div className='pop1'>
        <button className='cross' onClick={close}>X</button>
        <input type="text" placeholder="edit" value={a} onChange={(e)=>seta(e.target.value)} />
        <button onClick={edit}>edit</button>
        </div>
    </div>
  )
}
