import axios from "axios";
import { getEjemploSlice } from "../reducers/getEjemploSlice";

// get ejemplo
export const getEjemAll = () => async (dispatch) => {
  dispatch(getEjemploSlice());
};
