import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    searchAction(state, action) {
      return action.payload
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { searchAction } = searchSlice.actions;

// Export the slice reducer as the default export
export default searchSlice.reducer;
