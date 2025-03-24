import mongoose from "mongoose";
const cartSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    imageUrl:String
})

const productCart=mongoose.model("products",cartSchema)
export default productCart;