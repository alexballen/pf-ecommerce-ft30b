import axios from "axios";
import {
  allProducts,
  allCategories,
  allBrands,
  byOrder,
  byPrice,
  byCategories,
  byBrands,
  GetProduct,
  clearproduct,
} from "../reducers/getProductsSlice";
import db from "../../hooks/db";

const api = "http://localhost:3001";

export const getProducts = () => async (dispatch) => {
  axios
    .get(`${api}/products`)
    .then((res) => dispatch(allProducts(res.data)))
    .catch((e) => console.log(e));
};

export const getCategories = () => async (dispatch) => {
  axios
    .get(`${api}/products/categories`)
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};

export const getBrand = () => async (dispatch) => {
  axios
    .get(`${api}/products/brands`)
    .then((res) => dispatch(allBrands(res.data)))
    .catch((e) => console.log(e));
};

export const byCategory = (data) => async (dispatch) => {
  dispatch(byCategories(data));
};

export const byBrand = (data) => async (dispatch) => {
  dispatch(byBrands(data));
};

export const byOrderProducts = (data) => async (dispatch) => {
  dispatch(byOrder(data));
};

export const byOrderPrice = (data) => async (dispatch) => {
  dispatch(byPrice(data));
};

export const GetProductSearched = (searched) => {
  return async function (dispatch) {
    dispatch("acctionreducer(searched)");
  };
};

export const GetProductById = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`${api}/products/${id}`);
    console.log(data.data);
    dispatch(GetProduct(data.data));
  };
};
export const Clearproduct = () => {
  return async function (dispatch) {
    dispatch(clearproduct());
  };
};
export const createNewUser = (data) => async () => {
  await axios({
    method: "POST",
    url: `${api}/user/register`,
    data: data,
  }).catch((e) => console.log(e));
};
