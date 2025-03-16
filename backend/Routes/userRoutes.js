import express from 'express'
const router = express.Router()
import {createUser,getAllUsers,deleteUser, loginUser,updateUser} from "../Controller/userController.js"



router.post('/signup',createUser)
router.post('/login', loginUser)
router.get('/users',getAllUsers)
router.delete('/user/:id',deleteUser)
router.put('/user/:id',updateUser)
export default router