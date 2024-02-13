import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import searchSlice from "./slices/searchSlice";
import selectedItemSlice from "./slices/selectedItemSlice";
import loaderSlice from "./slices/loaderSlice";
const rootReducers = combineReducers({
    cart: cartSlice,
    products: productSlice,
    search: searchSlice,
    selectedItem: selectedItemSlice,
    loader: loaderSlice,
})

export default rootReducers;