//import axios from "axios";
import { allProducts, byOrder, byPrice } from "../reducers/getProductsSlice";
//import dbLocal from "../../hooks/dbLocal";
import db from "../../hooks/db";

// get ejemplo
export const getProducts = () => async (dispatch) => {
  const dbL = db;
  dispatch(allProducts(dbL));
};

export const byOrderProducts = (data) => async (dispatch) => {
  dispatch(byOrder(data));
};

export const byOrderPrice = (data) => async (dispatch) => {
  dispatch(byPrice(data));
};
