import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice.js"
const myStore  = configureStore({
    reducer:{
        login:loginSlice,
    }
})

export default myStore