import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    selectedItemActions(state, action) {
      return {
        ...state,
        ...action?.payload
      }
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { selectedItemActions } = selectedItemSlice.actions;

// Export the slice reducer as the default export
export default selectedItemSlice.reducer;
