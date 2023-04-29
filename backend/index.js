import  express from "express";
// import { mongo } from "mongoose";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import authRoute from "./routes/authRoute.js"
import bodyParser from "body-parser"
import gigRoute from "./routes/gigRoute.js"
import cookieParser from "cookie-parser";

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
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/gigs", gigRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
  });

app.listen(3000 , ()=>{
    connect();
    console.log("server started");
} )