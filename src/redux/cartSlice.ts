import { createSlice } from "@reduxjs/toolkit";
import { InventoryItem } from "../utils";

interface HasQuantity {
  qty: number;
}

type CartItem = InventoryItem & HasQuantity;

const INITIAL_CART_STATE: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: INITIAL_CART_STATE },
  reducers: {
    addItem: (state, action: { type: string; payload: InventoryItem }) => {
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
    removeItem: (state, action: { type: string; payload: InventoryItem }) => {
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
