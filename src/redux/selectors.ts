import { cartState } from "./cartSlice";

// Selectors
export const getCart = (state: { cartReducer: cartState }) =>
  state.cartReducer.cart;
