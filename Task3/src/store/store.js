import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import todoSlice from "../features/Todo/todoSlice.js";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoSlice,
    }
})