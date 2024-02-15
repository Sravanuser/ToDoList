 const express = require("express");
 const cors = require("cors");
 const mongoose = require("mongoose");
 const router = require("./Routes/ToDoRoutes");
 require("dotenv").config();

 const app = express();
 const PORT = process.env.PORT || 5000;

 app.use(express.json());
 app.use(cors());
 app.use(router)

 mongoose.connect(process.env.MONGODB_URL)
 .then(()=>{
    console.log("Connected Successfully");
 }).catch(err=>{
    console.log(err);
 })

 app.listen(PORT,()=>{
    console.log(`Listening At Port : ${PORT}`)
 })