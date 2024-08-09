const express = require("express");
const route = express.Router();
const { getToDo,addToDo,updateToDo, deleteToDo } = require("../Controllers/ToDoController.js");

route.get("/get",getToDo);
route.post("/save",addToDo);
route.put("/update/:id",updateToDo);
route.delete("/delete/:id",deleteToDo);

module.exports = route;