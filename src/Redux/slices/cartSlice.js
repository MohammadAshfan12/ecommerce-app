import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    addToCartAction(state, action) {
      return [...state, action.payload]
    },
    removeFromCartAction(state, action) {
      return state.filter(element => element.id !== action.payload)
    }
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { addToCartAction, removeFromCartAction } = cartSlice.actions;

// Export the slice reducer as the default export
export default cartSlice.reducer;
