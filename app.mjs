import express from 'express';
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'
import connectToDb from './db/db.js'
import { log } from 'console';

const app=express()
const port = process.env.PORT||3000
app.use(cors())
app.use(express.json())
//connect to db
connectToDb()
//middleware
app.use('/api',userRoutes)
app.use('/',()=>console.log("chalrha he "))


app.listen(()=>{
    console.log(`your app. listening on port ${port}`);
    
})
