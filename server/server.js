import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'

// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize Middlewares
app.use(express.json())
app.use(cors())

// Api Routes 
app.get('/' , (req,res) =>res.send("API Working"))
app.use('/api/user',userRouter)

app.listen(PORT , ()=> console.log("Server Running on port" +PORT))