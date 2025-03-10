import express from 'express';
const app = express()
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'
import connectedToDb from './db/db.js'


// const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


//connect to db
connectedToDb()
// .then(() => {
//     console.log("connected to DB");
// }).catch(err => {
//     console.log("error connecting DB", err);

// })

//middleware
app.use('/api', userRoutes)


app.listen(5000, () => {
    console.log(`your app. listening on port 5000`);

})
