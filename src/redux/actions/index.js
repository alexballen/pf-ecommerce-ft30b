/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  allProducts,
  allProductsForUser,
  allCategories,
  allBrands,
  GetProduct,
  clearproduct,
  searchByName,
  filterByCategory,
  filterByBrand,
  sort,
  pagePaginated,
  urlpayment,
  deleteProduct,
  deleteBaneoProduct,
  restoreBanProduct,
  getBanerProd,
  setRelatedProducts,
  deleteRestoreProduct,
} from "../reducers/getProductsSlice";

import {
  getusercart,
  agregaracart,
  limpiarcart,
  quitaritem,
  totalapagar,
  comprartodolink,
  clearlinks,
  info,
  todaslascompras,
  updatecartitem,
  agregarcomprado,
} from "../reducers/Cart";

import {
  getFavorites,
  loggedUser,
  getCountries,
  allUser,
  deleteUser,
  searchByUser,
  sortUser,
  baneoUser,
  restoreBanUser,
  deleteRestoreUser,
  getBanUser,
  createUserAddress,
  updateUser
} from "../reducers/userSlice";

const { REACT_APP_MPAGOTOKEN } = process.env;
export const getProducts = (userId) => async (dispatch) => {
  if (userId)
    axios
      .get(`/products?userId=${userId}`)
      .then((res) => dispatch(allProductsForUser(res.data)))
      .catch((error) => {
        throw new Error(error);
      });
  else
    axios
      .get(`/products`)
      .then((res) => dispatch(allProducts(res.data)))
      .catch((error) => {
        throw new Error(error);
      });
};

export const getCategories = () => async (dispatch) => {
  axios
    .get(`/products/categories`)
    .then((res) => dispatch(allCategories(res.data)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const getBrand = () => async (dispatch) => {
  axios
    .get(`/products/brands`)
    .then((res) => dispatch(allBrands(res.data)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const getCountry = () => async (dispatch) => {
  axios
    .get(`/country`)
    .then((res) => dispatch(getCountries(res.data)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const completeSignUp = (userId, data) => async (dispatch) => {
  await axios({
    method: "PATCH",
    url: `/user/${userId}`,
    data: data,
  }).catch((error) => {
    throw new Error(error);
  });
};

export const getUserFavorites = (userId) => async (dispatch) => {
  axios
    .get(`/user/favorites/${userId}`)
    .then((res) => dispatch(getFavorites(res.data.products)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const addFavorites = (data) => async (dispatch) => {
  await axios({
    method: "POST",
    url: `/user/favorites/`,
    data: data,
  })
    .then(() => dispatch(getProducts(data.userId)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const deleteFavorites = (data) => async (dispatch) => {
  await axios({
    method: "DELETE",
    url: `/user/removeFromFavorites`,
    data: data,
  })
    .then(() => dispatch(getProducts(data.userId)))
    .then(() => dispatch(getUserFavorites(data.userId)))
    .catch((error) => {
      throw new Error(error);
    });
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

export const byOrderUsers = (data) => async (dispatch) => {
  dispatch(sortUser(data));
};

export const searchUsers = (input) => async (dispatch) => {
  dispatch(searchByUser(input));
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
  }).catch((error) => {
    throw new Error(error);
  });
};
export const getRelatedProducts = (product) => async (dispatch) => {
  const { tags } = product;
  console.log(product);
  const taggedProducts = [];
  try {
    let productsraw = await axios.get("/products");
    const products = productsraw.data;
    const relatedProducts = products.filter(
      (p) => p.tags !== null && p.id !== product.id
    );
      for (let i = 0; i < relatedProducts.length; i++) {
      let k = Math.floor(Math.random() * relatedProducts.length);
      let temp = relatedProducts[i];
      relatedProducts[i] = relatedProducts[k];
      relatedProducts[k] = temp;
      }
    
        for (let i = 0; i < tags?.length; i++) {
          for (let j = 0; j < relatedProducts.length; j++) {
        if (
          relatedProducts[j].tags.includes(tags[i]) &&
          !taggedProducts.includes(relatedProducts[j])
        ) {
          taggedProducts.push(relatedProducts[j]);
            }
          }
        }
    dispatch(setRelatedProducts(taggedProducts));
  } catch (error) {
    throw new Error(error);
  }
};
export const currentPagePaginated = (page) => async (dispatch) => {
  dispatch(pagePaginated(page));
};

export const createNewProduct = (data) => async () => {
  await axios({
    method: "POST",
    url: `/products`,
    data: data,
  }).catch((error) => {
    throw new Error(error);
  });
};

export function getCurrentUser(user) {
  // Obtener la info del user loggeado

  return async function (dispatch) {
    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        // "Authorization": "Bearer " + await token()
      },
    };

    let json = await axios.post(`/user/login/`, user);
    dispatch(loggedUser(json.data?.data));
    dispatch(getusercart(json.data?.data.cart.products));
  };
}
 
export const buyproduct = (
  quantity,
  id,
  userId,
  {
    Apellido,
    Barrio,
    tipoCalle,
    Ciudad,
    Estado,
    Nombre,
    Pais,
    Prefijo,
    Telefono,
    calle1,
    calle2,
    zipcode,
    numerocalle,
  }
) => {
  const getproduct = {
    quantity,
    userId,
    Apellido,
    Barrio,
    tipoCalle,
    numerocalle,
    Ciudad,
    Estado,
    Nombre,
    Pais,
    Prefijo,
    Telefono,
    calle1,
    calle2,
    zipcode,
  };
  console.log(getproduct);
  return async function (dispatch) {
    const url = await axios.post(`/store/${id}`, getproduct);

    dispatch(urlpayment(url.data.init_point));
  };
};

export const addtocart = (userId, productId, qty, product) => {
  const adddingtocart = {
    userId,
    productId,
    qty,
  };
  return async function (dispatch) {
    await axios.post(`/store/add`, adddingtocart);
    dispatch(agregaracart(product));
  };
};

export const addcomprado =
  (
    userId,
    {
      preference_id,
      status,
      collection_id,
      collection_status,
      payment_type,
      merchant_order_id,
    }
  ) =>
  async (dispatch) => {
    const compra = {
      userId,
      preference_id,
      status,
      collection_id,
      collection_status,
      payment_type,
      merchant_order_id,
    };
    await axios.post(`/store/paymentcomplete`, compra);
  };

export const updatecart = (userId, productId, qty) => {
  const updated = {
    userId,
    productId,
    qty,
  };
  return async function (dispatch) {
    dispatch(updatecartitem(updated));
  };
};

export const cleancart = (userId) => {
  const borrado = {
    userId,
  };
  return async function (dispatch) {
    await axios.post(`/store/clean`, borrado);
    dispatch(limpiarcart());
  };
};

export const clearlink = () => {
  return async function (dispatch) {
    dispatch(clearlinks());
  };
};

export const comprartodo = (
  Cartitems,
  userId,
  {
    Apellido,
    Barrio,
    Calle,
    Ciudad,
    Estado,
    Nombre,
    Pais,
    Prefijo,
    Telefono,
    calle1,
    calle2,
    zipcode,
    tipoCalle,
    numerocalle,
  }
) => {
  const final = {
    userId,
    Cartitems,
    Apellido,
    Barrio,
    Calle,
    Ciudad,
    Estado,
    Nombre,
    Pais,
    Prefijo,
    Telefono,
    calle1,
    calle2,
    zipcode,
    tipoCalle,
    numerocalle,
  };

  return async function (dispatch) {
    const url = await axios.post(`/store/buyall`, final);

    dispatch(comprartodolink(url.data.init_point));
  };
};

export const getuserpaymets = (userId) => {
  const final = {
    userId,
  };
  return async function (dispatch) {
    const pagos = await axios.post(`/store/payments`, final);

    dispatch(info(pagos.data));
  };
};

export const alldatapagos = (collection_id) => {
  return async function (dispatch) {
    const confimacion = await axios.get(
      `https://api.mercadopago.com/v1/payments/${collection_id}`,
      {
        headers: {
          Authorization: `Bearer ${REACT_APP_MPAGOTOKEN}`,
        },
      }
    );

    for (let e of confimacion.data.additional_info.items) {
      const item = [];
      const id = confimacion.data.id;
      item.push(e, id);

      dispatch(agregarcomprado(item));
    }
  };
};

// export const datadecompra = (preference_id) => {
//   return async function (dispatch) {
//     const response = await axios.get(
//       `https://api.mercadopago.com/checkout/preferences/${preference_id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${REACT_APP_MPAGOTOKEN}`,
//         },
//       }
//     );
//     console.log(response);
//   };
// };

export const getdataadmin = () => {
  return async function (dispatch) {
    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&external_reference=H-COMERSEHENRY`,
 
      {
        headers: {
          Authorization: `Bearer ${REACT_APP_MPAGOTOKEN}`,
        },
      }
    );
 
    for (let e of response.data.results) {
    }

// MLA: Mercado Libre Argentina
// MLB: Mercado Libre Brasil
// MLC: Mercado Libre Chile
// MLM: Mercado Libre México
// MLU: Mercado Libre Uruguay
// MCO: Mercado Libre Colombia
// MPE: Mercado Libre Perú

    for (let e of response.data.results) {
    }

    const Argentina = 0;
    const Brasil = 0;
    const Chile = 0;
    const México = 0;
    const Uruguay = 0;
    const Colombia = 0;
    const Perú = 0;

    const impuestocompra = response.data.results.reduce(
      (ac, e) => ac + e.fee_details[0].amount,
      0
    );

    const totalpagado = response.data.results.reduce(
      (ac, e) => ac + e.transaction_details.total_paid_amount,
      0
    );

    const ventasnetas = response.data.results.reduce(
      (ac, e) => ac + e.transaction_details.net_received_amount,
      0
    );

    // dispatch(todaslascompras(response.data.results));
  };
};

export const alltopay = (total) => {
  return async function (dispatch) {
    dispatch(totalapagar(total));
  };
};

export const removeritem = (productId, userId) => {
  const removeitem = {
    userId,
    productId,
  };

  return async function (dispatch) {
    await axios.post(`/store/remove`, removeitem);
    dispatch(quitaritem(productId));
  };
};

export const deleteProductId = (id) => async (dispatch) => {
  await dispatch(deleteProduct(id));
  await axios.delete(`/products/${id}`);
};

export const getUser = () => async (dispatch) => {
  axios
    .get(`/user`)
    .then((res) => dispatch(allUser(res.data)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const deleteUserId = (id) => async (dispatch) => {
  await dispatch(deleteUser(id));
  await axios.delete(`/user/delete/${id}`);
};

export const banerUserId = (id) => async (dispatch) => {
  dispatch(baneoUser(id));
  await axios.delete(`/user/softDelete/${id}`);
};

export const restoreBanerUserId = (id) => async (dispatch) => {
  dispatch(deleteRestoreUser(id));
  dispatch(restoreBanUser());
  await axios.delete(`/user/softDelete/${id}?restore=true`);
  if (id) {
    await axios
      .get(`/user`)
      .then((res) => dispatch(allUser(res.data)))
      .catch((error) => {
        throw new Error(error);
      });
  }
};

export const banerProductId = (id) => async (dispatch) => {
  dispatch(deleteBaneoProduct(id));
  await axios.delete(`/products/softDelete/${id}`);
};

export const restoreBanerProductId = (id) => async (dispatch) => {
  dispatch(deleteRestoreProduct(id));
  dispatch(restoreBanProduct());
  await axios.delete(`/products/softDelete/${id}?restore=true`);
};

export const editProductId = (data, id) => async () => {
  await axios.put(`/products/update?productId=${id}`, data);
};

export const getBanerProduct = () => async (dispatch) => {
  await axios
    .get("/products/banProducts")
    .then((res) => dispatch(getBanerProd(res.data)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const getBanerUser = () => async (dispatch) => {
  await axios
    .get("/user/banerUsers")
    .then((res) => dispatch(getBanUser(res.data)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const updateUserData = (data) => async (dispatch) => {

  await axios
    .put("/user/address", data)
    .then((res) => {
    
    dispatch(updateUser(res.data));
    return res.data
    }
    )
    .catch((error) => {
      throw new Error(error);
    });
};

export const createAddress = (data) => async (dispatch) => {

  await axios
    .put("/user/address", data)
    .then((res) => {
    
    dispatch(createUserAddress(res.data));
    return res.data
    }
    )
    .catch((error) => {
      throw new Error(error);
    });
};