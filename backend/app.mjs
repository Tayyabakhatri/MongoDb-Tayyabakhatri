import express from 'express';
const app = express()
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'
import userCart from './Routes/userRoutes.js'
import connectedToDb from './db/db.js'



// const port = process.env.PORT || 3000

app.use(cors({
    origin:['http://localhost:5173','http://localhost:5174'],
    methods:["GET","PUT",'POST',"DELETE"],
    credentials: true,
    allowedHeaders:["Content-Type","Authorization"]
}))
app.use(express.json())


//connect to db
connectedToDb()

//middleware
app.use('/api/auth', userRoutes)
app.use('/api/cart',userCart)


app.listen(3000, () => {
    console.log(`your app. listening on port 3000`);

})
