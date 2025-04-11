import express from 'express'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from '../cloudinaryConfige.js'
import { uploadProduct, gettingProduct } from '../Controller/cartController.js'
import authentication from '../MiddleWare/authentication.js'


const router = express.Router()

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Products",
        allowed_formats: ["jpg", "png", "jpeg"]
    }
})

const upload = multer({ storage });

// Correct Route (Using Upload Middleware)
router.post("/upload", authentication, upload.single("image"), uploadProduct);
router.get('/gettingProduct', gettingProduct)

export default router; // Export router properly
