import express from 'express';
const app = express()
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'
import userCart from './Routes/userRoutes.js'
import connectedToDb from './db/db.js'


// const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


//connect to db
connectedToDb()

//middleware
app.use('/api/auth', userRoutes)
app.use('/api',userCart)


app.listen(3000, () => {
    console.log(`your app. listening on port 3000`);

})
