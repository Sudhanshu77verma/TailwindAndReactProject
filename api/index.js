import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from './routes/auth.route.js'
import cookieParser from "cookie-parser"

dotenv.config()
mongoose.connect(process.env.MONGO_DB_URL).then(()=>
console.log("mongo db connected"))
.catch((error)=>
console.log(error))


const app =express()
app.use(cookieParser());
app.use(express.json())

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

app.use('/api/auth',authRouter);


app.use((error,req,res,next)=>{
    const statuscode= error.statuscode || 500;
    const message=error.message || "Internal Server Error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message,
    })
})