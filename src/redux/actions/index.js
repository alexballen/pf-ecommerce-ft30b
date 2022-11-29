import axios from "axios";
import qs from 'qs';
import {
  allProducts,
  allCategories,
  allBrands,
  GetProduct,
  clearproduct,
  searchByName,
  filterByCategory,
  filterByBrand,
  sort,
  pagePaginated,
} from "../reducers/getProductsSlice";
import db from "../../hooks/db";
import {
  loggedUser,
} from "../reducers/userSlice";



export const getProducts = () => async (dispatch) => {
  axios
    .get(`/products`)
    .then((res) => dispatch(allProducts(res.data)))
    .catch((e) => console.log(e));
};

export const getCategories = () => async (dispatch) => {
  axios
    .get(`/products/categories`)
    .then((res) => dispatch(allCategories(res.data)))
    .catch((e) => console.log(e));
};

export const getBrand = () => async (dispatch) => {
  axios
    .get(`/products/brands`)
    .then((res) => dispatch(allBrands(res.data)))
    .catch((e) => console.log(e));
};

export const byCategory = (data) => async (dispatch) => {
  dispatch(filterByCategory(data));
};

export const byBrand = (data) => async (dispatch) => {
  dispatch(filterByBrand(data));
};

export const byOrderProducts = (data) => async (dispatch) => {
  dispatch(sort(data));
};

export const byOrderPrice = (data) => async (dispatch) => {
  dispatch(sort(data));
};

export const search = (input) => async (dispatch) => {
  dispatch(searchByName(input));
};

export const GetProductById = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`/products/${id}`);
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
    url: `/user/register`,
    data: data,
  }).catch((e) => console.log(e));
};

export const currentPagePaginated = (page) => async (dispatch) => {
  dispatch(pagePaginated(page));
};

export const createNewProduct = (data) => async () => {
  await axios({
    method: "POST",
    url: `/products`,
    data: data,
  }).catch((e) => console.log(e));
};

// export const currentPagePaginated = (page) => async (dispatch) => {
//   dispatch(pagePaginated(page));
// };

export function getCurrentUser( user) { // Obtener la info del user loggeado


  return async function (dispatch) {
    console.log("USER ACTION: ", user)

      const config = {
  
          headers: {
            'content-type': 'application/x-www-form-urlencoded' ,
              // "Authorization": "Bearer " + await token()
          }
      }

      let json = await axios.post(`/user/login/`,user)
      dispatch(loggedUser(json.data))
  }
}
