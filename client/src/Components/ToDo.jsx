export default function ToDo({id,text,setUpdate,setUpdateUI,setpop}){
    async function deletes(){
        const res = await fetch(`http://localhost:5000/api/delete/${id}`,{
            method:"DELETE",
            headers : {
                "Content-Type":"application/json"
            }
        });
        setUpdateUI(prev=>!prev)
    }
    function edit(){
        setpop({text,id});
        setUpdate(true);
    }
    return(
        <div className="todo">
            <p>{text}</p>
            <div>
                <button onClick={edit}>edit</button>
                <button onClick={deletes}>delete</button>
            </div>
        </div>
    )
}