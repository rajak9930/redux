import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./action/createSlice";

const store= configureStore({
    reducer:{
        user:createSlice
    }
})

export default store;