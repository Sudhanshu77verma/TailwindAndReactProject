import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
mongoose.connect(process.env.MONGO_DB_URL).then(()=>
console.log("mongo db connected"))
.catch((error)=>
console.log(error))


const app =express()
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
