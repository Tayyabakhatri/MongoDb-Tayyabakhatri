import productCart from "../Model/cartModel.js";
import productSchema from "../Schema/productSchema.js";
import chalk from 'chalk'


export const uploadProduct = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            error: "no image uploaded"
        })
    }
    try {
        console.log("receive body", req.body);
        const validateProduct = await productSchema.validateAsync(req.body)
        const newProduct = await new productCart({ ...validateProduct, image: req.file.path });
        await newProduct.save();


        console.log('cart route hit', req.file.path);
        res.status(200).json({
            success: true,
            message: "image successfully uploaded",
            image: req.file.path
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}
export const gettingProduct = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            error: "req.body no found"
        })

    }
    try {
        const productCollection = await productCart.find()
        res.status(200).json({
            success: true,
            message: "all products found",
            productCollection: productCollection
        })
    } catch (error) {
        console.log(chalk.bgRed.white("error: ", error.message));
        res.status(404).json({
            success: false,
            message: "no product found",
        })

    }
}