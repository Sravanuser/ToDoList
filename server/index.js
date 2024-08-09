const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const route = require("./Routes/ToDoRoutes.js");

let dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api",route);
app.use(express.static(path.join(dirname,"/client/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(dirname,"client","dist","index.html"))
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected Successfully"))
.catch(err=>console.log(err))

app.listen(PORT,()=>{
    console.log(`Running at PORT : ${PORT}`);
})