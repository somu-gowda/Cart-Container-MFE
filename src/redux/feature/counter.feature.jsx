import { createSlice } from "@reduxjs/toolkit";
import ProductService from "../../services/Products";
const productList = ProductService.getProductList();


const initialState = {
  cartItems: productList,
};

let counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: function (state, action) {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
       if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      } 
    },
    decrement: function (state, action) {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
