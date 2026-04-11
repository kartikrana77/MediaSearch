import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Redux/features/searchSlice"

export const Store = configureStore({
    reducer:{
        search:searchReducer
    }
})