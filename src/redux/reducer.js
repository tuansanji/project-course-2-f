// export const initState = {
//   product: {
//     game: {},
//     item: {},
//   },
//   shopping: [
//     { id: 1, name: "tuansanji" },
//     { id: 2, name: "tuansanji2" },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "shopping/addItemShopping":
//       return {
//         ...state,
//         shopping: [...state.shopping, action.payload],
//       };
//     default:
//       throw new Error("Invalid action ");
//   }
// };

// export default rootReducer;
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "shopping",
  initialState: [],
  reducers: {
    addShopping: (state, action) => {
      state.push(action.payload);
    },
    deletetShopping: (state, action) => {
      state.splice(action.payload, 1);
    },
    resetShopping: (state, action) => {
      state.splice(action.payload, state.length);
    },
  },
});
