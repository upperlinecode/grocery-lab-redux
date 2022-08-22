import { createSlice } from "@reduxjs/toolkit";
import { InventoryItem } from "../utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        product: {
          name: "Apple",
          priceInCents: 199,
          productID: "a1582",
        } as InventoryItem,
        qty: 1,
      },
      {
        product: {
          name: "Loaf of Bread",
          priceInCents: 150,
          productID: "b2693",
        } as InventoryItem,
        qty: 1,
      },
      {
        product: {
          name: "Milk",
          priceInCents: 250,
          productID: "m3704",
        } as InventoryItem,
        qty: 1,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const i = state.cart.findIndex(
        (item) => item.product.productID === action.payload
      );
      if (i >= 0) {
        state.cart[i].qty += 1;
      }
    },
    removeItem: (state, action) => {
      const i = state.cart.findIndex(
        (item) => item.product.productID === action.payload
      );
      if (i >= 0 && state.cart[i].qty > 0) {
        state.cart[i].qty -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
