import express from 'express';
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'
import connectToDb from './db/db.js'


const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


//connect to db
connectToDb().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log("error connecting DB", err);

})

//middleware
app.use('/api', userRoutes)
app.get('/', (req, res) => console.log("chalrha he "))


app.listen(port, () => {
    console.log(`your app. listening on port ${port}`);

})
