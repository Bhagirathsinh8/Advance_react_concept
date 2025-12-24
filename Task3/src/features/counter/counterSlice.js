import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    stateReset:(state)=>{
        state.count=0;
    },
    incrementByAmount:(state,action)=>{
        state.count+=action.payload;
        console.log(action.payload);
        console.log(action.type);
    }
    
  },
});

export const { increment, decrement,stateReset,incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer
