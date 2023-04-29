import { createSlice } from "@reduxjs/toolkit";
import { pizzas } from "../products/products";

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzas,
    cart: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const pizza = state.pizzas.find((pizza) => pizza.id === payload);
      const existingCartItem = state.cart.find((item) => item.id === pizza.id);
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cart.push({ quantity: 1, ...pizza });
      }
    },
    remove: (state, { payload }) => {
      const pizza = state.cart.find((pizza) => pizza.id === payload);
      const existingCartItem = state.cart.find((item) => item.id === pizza.id);
      if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    makeOrder: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, remove, removeFromCart, makeOrder } =
  pizzaSlice.actions;

export default pizzaSlice.reducer;
