import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Redux/features/searchSlice"
import collectionReducer from "../Redux/features/collectionSlice"

export const Store = configureStore({
    reducer:{
        search:searchReducer,
        collect:collectionReducer
    }
})