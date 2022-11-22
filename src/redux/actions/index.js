import axios from "axios";
// import { getEjemploSlice } from "../reducers/getEjemploSlice";

const api = 'http://localhost:3001'

// // get ejemplo
// export const getEjemAll = () => async (dispatch) =>
// {
//   dispatch(getEjemploSlice());
// };

export const createNewUser = (data) => async () =>
{
  await axios({
    method: 'POST',
    url: `${api}/user/register`,
    data: data
  }).catch((e) => console.log(e));
}