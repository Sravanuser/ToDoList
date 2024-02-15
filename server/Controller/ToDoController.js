const ToDo = require("../Models/ToDoModel");

module.exports.getData = async(req,res) => {
    const todo = await ToDo.find({});
    res.send(todo);
}

module.exports.saveData = async(req,res) => {
    const { toDo } = req.body;
    const newData = await ToDo.create({toDo});
    res.send(newData);
}

module.exports.updateData = async(req,res) => {
    const { toDo } = req.body;
    const { id } = req.params;
    const data = await ToDo.findByIdAndUpdate(id,{toDo});
    res.send(data);
}

module.exports.deleteData = async(req,res) => {
    const { id } = req.params;
    const data = await ToDo.findByIdAndDelete(id);
    res.send(data);
}