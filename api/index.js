import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from './routes/auth.route.js'
import cookieParser from "cookie-parser"
import path from "path"
dotenv.config()
mongoose.connect(process.env.MONGO_DB_URL).then(()=>
console.log("mongo db connected"))
.catch((error)=>
console.log(error))

 const __dirname= path.resolve()

const app =express()
app.use(cookieParser());
app.use(express.json())
app.use('/api/auth',authRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})
 


app.use((error,req,res,next)=>{
    const statuscode= error.statuscode || 500;
    const message=error.message || "Internal Server Error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message,
    })
})