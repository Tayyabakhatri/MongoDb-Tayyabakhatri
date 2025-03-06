import express from 'express'
const router = express.Router()
import {createUser} from "../Controller/userController.js"


// router.get('/users',getAllUsers)
// router.delete('/user/:id',deleteUser)
// router.get('/user/:id',getOneUser)
// router.put('/user/:id',updateUser)
router.post('/user',createUser)
export default router