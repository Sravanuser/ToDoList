const { Router } = require("express");
const { getData, saveData, updateData,deleteData } = require("../Controller/ToDoController");

const route = Router();

route.get("/",getData);
route.post("/save",saveData);
route.put("/update/:id",updateData);
route.delete("/delete/:id",deleteData);

module.exports = route;