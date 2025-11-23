import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      state.push(action.payload);
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddItem, RemoveItem } = cartSlice.actions;

export default cartSlice.reducer;
