import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "buyCart",
  initialState: {
    list: [],
    price: "",
  },
  reducers: {
    buyProduct: (state, action) => {
      state.list = [...action.payload.list];
      state.price = action.payload.price;
    },
  },
});
