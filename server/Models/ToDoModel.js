const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    toDo:{
        type:String,
        required:true
    }
})
const toDo = new mongoose.model("toDo",Schema);
module.exports = toDo;