import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: [],
    product: {},
    categories: [],
    copyProducts: [],
    brands: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.products = action.payload;
      state.copyProducts = action.payload;
    },
    allCategories: (state, action) => {
      state.categories = action.payload;
    },
    allBrands: (state, action) => {
      state.brands = action.payload;
    },
    byOrder: (state, action) => {
      const orderProducts =
        action.payload === "Asc"
          ? state.products.sort((a, b) => (a.name > b.name ? 1 : -1))
          : state.products.sort((a, b) => (a.name > b.name ? -1 : 1));
      state.products = orderProducts;
    },
    byPrice: (state, action) => {
      const orderPrice =
        action.payload === "Max"
          ? state.products.sort((a, b) => (a.unitPrice > b.unitPrice ? -1 : 1))
          : state.products.sort((a, b) => (a.unitPrice > b.unitPrice ? 1 : -1));
      state.products = orderPrice;
    },
    byCategories: (state, action) => {
      const allProd = state.copyProducts;
      const byCat =
        action.payload === "All"
          ? allProd
          : allProd.filter((e) =>
              e.categories.find((cat) => cat.name === action.payload)
            );
      state.products = byCat;
    },
    byBrands: (state, action) => {
      const allBran = state.copyProducts;
      const byBran =
        action.payload === "All"
          ? allBran
          : allBran.filter((e) => e.brand.name === action.payload);
      state.products = byBran;
    },
    GetProductlocal: (state, action) => {
      const product = action.payload;
      state.product = product;
    },
  },
});

export const {
  allProducts,
  allCategories,
  allBrands,
  byOrder,
  byPrice,
  byCategories,
  byBrands,
  GetProductlocal,
} = productSlice.actions;
export default productSlice.reducer;
