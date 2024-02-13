import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducer";

const makeStore = () => configureStore({
  reducer: rootReducers
})

const store = makeStore();

export default store;