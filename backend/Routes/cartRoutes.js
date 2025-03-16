import express from 'express'
import {getCart} from '../Controller/cartController.js'
const router = express()
router.get('/',getCart)
export default router
