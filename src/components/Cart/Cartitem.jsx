/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeritem, updatecart } from "../../redux/actions";
import { buyproduct } from "../../redux/actions";
import { alltopay } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cartitem({ name, image, stock, id, unitPrice, quantity, brand }) {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.user);
  const userid = loggedUser?.id;
  const { Cartitems } = useSelector((state) => state.Cart);
  const { total } = useSelector((state) => state.Cart);

  const [cantidad, setcantidad] = useState(quantity);
  const { paymenturl } = useSelector((state) => state.products);
  function Generarlink() {
    dispatch(buyproduct(cantidad, id));
  }
  var totals = 0;
  function borrar() {
    dispatch(removeritem(id, userid));
  }

  function add(e) {
    const value = e.target.value;
    setcantidad(value);
    // dispatch(updatecart(userid, id, cantidad));
  }

  useEffect(() => {
    totals = 0;

    for (let e of Cartitems) {
      totals = totals + e.quantity * e.unitPrice;
      dispatch(alltopay(totals));
    }
    console.log("cambio cantidad");
  }, [Cartitems.length, total, cantidad]);

  return (
    <tbody>
      <tr>
        <Link to={`/products/${id}`}>
          <td>
            <div className="  items-center   content-center align-middle space-x-3">
              <div className="avatar text-center  content-center  align-middle  ">
                <td className="text-center ">
                  <div className="   w-20 h-20">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </td>
              </div>
            </div>
          </td>
          <td>
            <div className="  items-center   content-center align-middle space-x-3">
              <td className="text-center ">
                <p className="text-center">{name}</p>
              </td>
            </div>
          </td>
        </Link>

        <td className="text-center   ">${unitPrice}</td>
        <th className="text-center   ">
          <span className=" text-center   font-bold    text-2xl "></span>
        </th>
        <th className="text-center  ">
          <input
            name="quantity"
            min={1}
            onChange={add}
            value={cantidad}
            max={stock}
            className="rounded border text-center title-font text-slate-700   appearance-none border-gray-400 py-2  text-base   "
            type={"number"}
          ></input>
        </th>
        <th className="text-center ">
          <span className=" text-center   font-bold   ">
            ${unitPrice * cantidad}
          </span>
        </th>
        <th className="text-center ">
          <span className="    font-bold   ">{stock} disponibles</span>
        </th>
        <th className="text-center">
          <label
            htmlFor="Pagaritem"
            onClick={Generarlink}
            className="btn  btn-ghost  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-truck"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#7bc62d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            </svg>
          </label>
          <span className=""></span>
          <label className="btn  btn-ghost  ">
            <svg
              onClick={borrar}
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart-x"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ff2825"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
              <path d="M17 3l4 4" />
              <path d="M21 3l-4 4" />
            </svg>
          </label>
        </th>

        <input type="checkbox" id="Pagaritem" className="modal-toggle " />
        <div className="modal ">
          <div className="modal-box   ">
            <h3 className="font-bold  text-lg">
              <div className="alert   shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>

                  <p className=" text-black py-4   font-bold  ">
                    Quieres comprar x{cantidad} {name}
                  </p>
                </div>
              </div>
            </h3>

            <div className="modal-action">
              <a
                href={paymenturl}
                htmlFor="Pagaritem"
                className="btn bg-green-500 text-white hover:bg-green-600 "
              >
                ir a Pagar!
              </a>

              <label
                htmlFor="Pagaritem"
                className="btn bg-red-500 text-white hover:bg-red-600 "
              >
                Cerrar
              </label>
            </div>
          </div>
        </div>
      </tr>
    </tbody>
  );
}

export default Cartitem;
