import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () =>{
        const res = await axios.get('https://fakestoreapi.com/products');
        // console.log(res.data);
        return res.data;
    }
)
const productSlice = createSlice({
    name: 'products',
    initialState: {
        product_items: [],
        loading: false,
         error: null,
    },
    reducers:{
        setProducts: (state, action) => {
            state.product_items = action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{

            state.loading = false;
            state.product_items = action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    }
});


export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
