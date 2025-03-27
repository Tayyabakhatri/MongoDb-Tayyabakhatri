import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../Reducers/authSlice.js'
import{productDetail} from '../Reducers/productSlice.js'
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        productDetail: productDetail.reducer
      },
})