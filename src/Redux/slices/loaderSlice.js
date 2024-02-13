import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    loaderAction(state, action) {
      return action.payload;
    }
  },
});

export const { loaderAction } = loaderSlice.actions;

export default loaderSlice.reducer;
