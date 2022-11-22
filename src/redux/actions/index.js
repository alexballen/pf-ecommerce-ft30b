/* eslint-disable no-unused-vars */
//import axios from "axios";
import { allProducts, byOrder, byPrice } from "../reducers/getProductsSlice";
//import dbLocal from "../../hooks/dbLocal";
import db from "../../hooks/db";
const api = 'http://localhost:3001';

// get ejemplo
export const getProducts = () => async (dispatch) =>
{
  const dbL = db;
  dispatch(allProducts(dbL));
};

export const byOrderProducts = (data) => async (dispatch) =>
{
  dispatch(byOrder(data));
};

export const byOrderPrice = (data) => async (dispatch) =>
{
  dispatch(byPrice(data));
};

export const GetProductSearched = (searched) =>
{
  return async function (dispatch)
  {
    dispatch("acctionreducer(searched)");
  };
};

export const createNewUser = (data) => async () =>
{
  await axios({
    method: 'POST',
    url: `${api}/user/register`,
    data: data
  }).catch((e) => console.log(e));
}