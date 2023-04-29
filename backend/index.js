import  express from "express";
// import { mongo } from "mongoose";
import mongoose from "mongoose";
import dotenv from "dotenv"


const app =  express();
dotenv.config();
mongoose.set('strictQuery' , true);

const connect = ()=>{
    try {
        mongoose.connect("mongodb+srv://abhi:abhi@cluster0.jt8xpxy.mongodb.net") 
        console.log("connected to db")
     } catch (error) {
         console.log(error)
     }
}



app.listen(3000 , ()=>{
    connect();
    console.log("server started");
} )