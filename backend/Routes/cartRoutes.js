import express from 'express'
import {getCart} from '../Controller/cartController.js'
import authentication from '../MiddleWare/authentication.js'
const router = express()
router.get('/',authentication,getCart)
export default router
