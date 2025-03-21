import express from 'express'
const router = express.Router()
import {createUser,getAllUsers,deleteUser, loginUser,updateUser, isAdmin} from "../Controller/userController.js"
import authentication from '../MiddleWare/authentication.js'



router.post('/signup',createUser)
router.post('/login', loginUser)
router.get('/users',getAllUsers)
router.delete('/user/:id',deleteUser)
router.put('/user/:id',updateUser)
router.get('/admin',authentication, isAdmin)
export default router