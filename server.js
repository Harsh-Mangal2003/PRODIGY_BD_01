import express from "express"

import cors from "cors"

import "dotenv/config";
import { connectDB } from "./lib/db";
import userRouter from "./routes/userRoutes";

const app=express();



app.use(express.json({limit:"4mb"}))
app.use(cors());
await connectDB();

//Routes setup
app.use("/api/status",(req,res)=>res.send("Server is live"));

app.use("/api/auth",userRouter);
const PORT=process.env.PORT || 5000;
server.listen(PORT,()=> console.log("Server is runing on PORT :"+PORT));
