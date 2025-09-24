import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer"

let useless = 0;

export const store = configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})