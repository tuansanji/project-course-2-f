// import { createStore } from "redux";
// import {composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import buyCartSlice from ".././component/nav/store/listShoppingSlice";
import toastSlice from "./toastSlice";
import formSlice from "../pages/form/formSlice";
// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer,composedEnhancers);
// export default store;
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    shopping: rootReducer.reducer,
    buyCart: buyCartSlice.reducer,
    toastSlice: toastSlice.reducer,
    formSlice: formSlice.reducer,
  },
});
export default store;
