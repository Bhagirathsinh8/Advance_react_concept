import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice.js";
import loggerMiddleware from "./loggerMiddleware.js";

const store = configureStore({
    reducer:{
        product:productSlice
    },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;