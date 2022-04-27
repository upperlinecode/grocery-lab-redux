import { CartAction } from "./configureStore";

export const addItem = (id: string) => ({
  type: "ADD_ITEM",
  payload: id,
});

export const removeItem = (id: string) => ({
  type: "REMOVE_ITEM",
  payload: id,
});

export const clearItem = (id: string) => ({
  type: "CLEAR_ITEM",
  payload: id,
});
