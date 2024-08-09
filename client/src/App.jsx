import "./App.css";
import { useState, useEffect } from "react";
import ToDo from "./Components/ToDo";
import Popup from "./Components/Popup";

export default function App() {
    const [Input, setInput] = useState("");
    const [data, setdata] = useState([]);
    const [update,setUpdate] = useState(false);
    const [updateUI,setUpdateUI] = useState(false);
    const [pop,setpop] = useState({});
    useEffect(() => {
        async function getToDo() {
            const res = await fetch("http://localhost:5000/api/get");
            const result = await res.json();
            setdata(result)
        }
        getToDo();
    }, [updateUI])
        async function add(){
            const res = await fetch("http://localhost:5000/api/save",{
                method : "POST",
                headers : {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({toDo:Input})
            });
            setUpdateUI(prev=>!prev)
            setInput("");
        }
    return (
        <div className="app">
            <div className="app1">
                <div className="app2">
                    <input type="text" value={Input} onChange={e => setInput(e.target.value)} placeholder="Enter toDo" />
                    <button onClick={add}>Add</button>
                </div>
                <div className="data">
                    {
                        data.map((item, id) => {
                            return (
                                <ToDo key={id} id={item._id} text={item.toDo} setUpdate={setUpdate} setpop={setpop} setUpdateUI={setUpdateUI}/>
                            )
                        })
                    }
                </div>
            </div>
            {update && <Popup setUpdateUI={setUpdateUI} setUpdate={setUpdate} pop={pop}/>}
        </div>
    )
}