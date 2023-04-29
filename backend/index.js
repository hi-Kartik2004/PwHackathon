import  express from "express";
// import { mongo } from "mongoose";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import authRoute from "./routes/authRoute.js"
import bodyParser from "body-parser"

const app =  express();
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
// app.use(cookieParser());
app.use("/api/auth", authRoute);




app.listen(3000 , ()=>{
    connect();
    console.log("server started");
} )