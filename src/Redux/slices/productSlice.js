import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    setProduct(state, action) {
      return [...action.payload];
    },
    findProduct(state, action) {
      return state.find(element => element.id === action.payload.id) 
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { setProduct } = productSlice.actions;

// Export the slice reducer as the default export
export default productSlice.reducer;
