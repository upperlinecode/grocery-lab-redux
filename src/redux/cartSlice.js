import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      const itemDetails = action.payload;
      const i = state.cart.findIndex(
        (item) => item.productID === itemDetails.productID
      );
      console.log(itemDetails, state, i);
      if (i > -1) {
        if (state.cart[i]) {
          state.cart[i].qty += 1;
        }
      } else {
        const newItem = { ...itemDetails, qty: 1 };
        state.cart.push(newItem);
      }
      return state;
    },
    removeItem: (state, action) => {
      const itemDetails = action.payload;
      const i = state.cart.findIndex(
        (item) => item.productID === itemDetails.productID
      );
      if (i !== -1) {
        if (state.cart[i].qty === 1) {
          state.cart.splice(i, 1);
        } else if (i > -1) {
          state.cart[i].qty -= 1;
        }
      }
      return state;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
