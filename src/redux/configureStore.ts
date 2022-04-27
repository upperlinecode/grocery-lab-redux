import { legacy_createStore as createStore } from "redux";
import { InventoryItem } from "../utils";
import { inventory } from "../utils";

const initialState = {
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
};

export type StateType = typeof initialState;

export type CartAction = {
  type: string;
  payload: string;
};

const reducer = (state = initialState, action: CartAction) => {
  const i = state.cart.findIndex(
    (item) => item.product.productID === action.payload
  );
  switch (action.type) {
    case "ADD_ITEM":
      if (state.cart[i]) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, i),
            { ...state.cart[i], qty: state.cart[i].qty + 1 },
            ...state.cart.slice(i + 1),
          ],
        };
      } else {
        return state;
      }
    case "REMOVE_ITEM":
      if (state.cart[i] && state.cart[i].qty === 0) {
        return state;
      } else if (state.cart[i]) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, i),
            { ...state.cart[i], qty: state.cart[i].qty - 1 },
            ...state.cart.slice(i + 1),
          ],
        };
      } else {
        return state;
      }
    case "CLEAR_ITEM":
      if (state.cart[i]) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, i),
            { ...state.cart[i], qty: 0 },
            ...state.cart.slice(i + 1),
          ],
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const myStore = createStore(reducer);
