import mongoose from "mongoose";
const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    image:String
})

const productCart=mongoose.model("products",cartSchema)
export default productCart;