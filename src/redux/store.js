import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/getProductsSlice";

export const store = configureStore({
  reducer: {
    products: products,
  },
});
