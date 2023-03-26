export const shoppingSelector = (state) => state.shopping;
export const buyCartSelector = (state) => state.buyCart;
export const formSelector = (state) => state.formSlice;
export const userCurrentSelect = (state) =>
  state.getState().formSlice.userCurrent;
