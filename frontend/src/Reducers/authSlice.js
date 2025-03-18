import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
    isAuthenticated: localStorage.getItem("token") ? true : false
}
export const authSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        login: (state, action) => {

        }
    },
    logout: (state) => {
    },
})
export const { login, logout } = authSlice.actions
export default authSlice.reducer;