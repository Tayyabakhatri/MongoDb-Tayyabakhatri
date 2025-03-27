import { createSlice } from "@reduxjs/toolkit";

const productInitialState = {
    productName: localStorage.getItem("productName") || null,
    productPrice: localStorage.getItem("productPrice") || null,
    productDescription: localStorage.getItem("productDescription") || null,
    productId: localStorage.getItem("productId") || null,
    productImage: localStorage.getItem("productImage") || null
}
export const productDetail = createSlice({
    name: "productDetailSlice",
    initialState: productInitialState,
    reducers: {
        productDetails: (state, action) => {
            //action.payload is an object so we are destructuring it werna ham esy likhty hen
            //state.productName= action.payload.productName

            const { productName, productPrice, productDescription, productId, productImage } = action.payload;

            state.productName = productName;
            state.productPrice = productPrice;
            state.productDescription = productDescription;
            state.productId = productId;
            state.productImage = productImage
        }
    }

})
export const { productDetails } = productDetail.actions
export default productDetail.reducer;