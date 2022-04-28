import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InventoryItem } from "../utils";

type CartState = {
  product: InventoryItem,
  qty: number;
}[];

const initialState: CartState = [
  {
    product: {
      name: "Apple",
      priceInCents: 199,
      productID: "a1582",
    },
    qty: 1,
  },
  {
    product: {
      name: "Loaf of Bread",
      priceInCents: 150,
      productID: "b2693",
    },
    qty: 1,
  },
  {
    product: {
      name: "Milk",
      priceInCents: 250,
      productID: "m3704",
    },
    qty: 1,
  },
];

const getCartItem = (state: CartState, productId: string) =>
  state.find((item) => item.product.productID === productId);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      const item = getCartItem(state, action.payload)!;
      if (item) {
        item.qty += 1;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const item = getCartItem(state, action.payload);
      if (item && item.qty > 0) {
        item.qty -= 1;
      }
    },
    clearItem(state, action: PayloadAction<string>) {
      const item = getCartItem(state, action.payload);
      if (item) {
        item.qty = 0;
      }
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice;
