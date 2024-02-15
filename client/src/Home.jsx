import React from 'react'
import { useState, useEffect } from 'react'
import ToDo from './ToDo';
import { IoMdAddCircleOutline } from "react-icons/io";
import Updated from './Updated';

export default function Home() {
  const [inpval, setinpval] = useState("");
  const [data, setData] = useState([]);
  const [ui,setui] = useState(false);
  const [change,setchange] = useState({})
  const [pop,setpop] = useState(false);
  useEffect(()=>{
    async function ToDoData(){
      const response = await fetch("http://localhost:5000");
      const result = await response.json();
      setData(result);
    }
    ToDoData();
  },[ui])
  async function Saving(){
    const response = await fetch("http://localhost:5000/save",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({toDo:inpval})
    });
    setui(prev=>!prev);
    setinpval("");
  }
  return (
    <div className='container'>
      <div className='todo_box'>
        <div className='fields'>
          <input type='text' value={inpval} onChange={(e) => setinpval(e.target.value)} />
          <IoMdAddCircleOutline size={30} className='add' onClick={Saving}/>
        </div>
        <div className='todos'>
        {
          data.map((item)=>{
            return(
              <ToDo text={item.toDo} id={item._id} key={item._id} setchange={setchange} setui={setui} setpop={setpop}/>
            )
          })
        }
      </div>
      </div>
      {
        pop && <Updated setpop={setpop} setui={setui} change={change}/>
      }
    </div>
  )
}
