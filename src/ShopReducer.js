import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }
      // state.totalPrice += newItem.price;
      state.items.push({ ...newItem });
    },
    incrementItem: (state, action) => {
      const newItem = action.payload;
      const item = state.items.find((item) => item.id === newItem);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const newItem = action.payload;
      const item = state.items.find((item) => item.id === newItem);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          // state.totalPrice -= item.price;
        } else {
          state.items = state.items.filter((item) => item.id !== newItem);
          // state.totalPrice -= item.price;
        }
      }
    },
    calculatePrice: (state, action) => {
      state.totalPrice = 0;
      state.items.map((item) => {
        state.totalPrice += item.price * item.quantity;
      });
    },
    removeItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem,
  calculatePrice,
  incrementItem,
  decrementItem,
  removeItems,
} = cartSlice.actions;

export const selectedItems = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
