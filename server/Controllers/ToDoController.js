const ToDo = require("../Models/ToDoModel.js");

module.exports.getToDo = async(req,res) => {
    try{
        const data = await ToDo.find({});
        res.send(data);
    }catch(err){
        res.json({error:err.message})
    }
}

module.exports.addToDo = async(req,res) => {
    try{
        const { toDo } = req.body;
        if(toDo){
            const data = await ToDo.create({toDo:toDo});
            res.send(data);
        }else{
            throw new Error("no todo from user");
        }
    }catch(err){
        res.json({err:err.message})
    }
}

module.exports.updateToDo = async(req,res) => {
    try{
        const { id } = req.params;
        const {toDo} = req.body;
        if( id && toDo ){
            const data = await ToDo.findByIdAndUpdate(id,{toDo});
            res.send(data);
        }else{
            throw new Error("no input from user");
        }
    }catch(err){
        res.status(401).send({error:err.message});
    }
}

module.exports.deleteToDo = async(req,res) => {
    try{
        const { id } = req.params;
        if(id){
            const data = await ToDo.findByIdAndDelete(id);
            res.send(data);
        }else{
            throw new Error("no id to delete");
        }
    }catch(err){
        res.status(401).json({error:err.message});
    }
}