/* eslint-disable no-unused-vars */
import axios from "axios";
import { getEjemploSlice } from "../reducers/getEjemploSlice";

// get ejemplo
export const getEjemAll = () => async (dispatch) => {
  dispatch(getEjemploSlice());
};

export const GetProductSearched = (searched) => {
  return async function (dispatch) {
    dispatch("acctionreducer(searched)");
  };
};
