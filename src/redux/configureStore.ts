import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
  },
});

const stateSnapshot = store.getState();
export type StoreStateShape = typeof stateSnapshot;
