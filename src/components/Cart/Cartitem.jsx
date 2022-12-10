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
  const userId = loggedUser?.id;
  const { Cartitems } = useSelector((state) => state.Cart);
  const [cantidad, setcantidad] = useState(quantity);
  const { paymenturl } = useSelector((state) => state.products);
  function Generarlink() {
    dispatch(buyproduct(cantidad, id));
  }
  var totals = 0;
  function borrar() {
    dispatch(removeritem(id, userId));
  }
 
  function add(e) {
    setcantidad(e.target.value);
     dispatch(updatecart(userId, id, e.target.value ));
  }

  useEffect(() => {
    setcantidad(quantity)
    for (let e of Cartitems) {
      totals = totals + e.quantity * e.unitPrice;
      dispatch(alltopay(totals));
    }
 
  }, [Cartitems]);

  return (
    <tbody>
      <tr>
        <Link to={`/products/${id}`}>
          <td>
            <div className="  items-center   content-center align-middle space-x-3">
              <div className="avatar text-center  content-center  align-middle  ">
                <td className="text-center ">
                  <div className="   w-20 h-20">
                    <img src={image} style={{objectFit: 'scale-down', objectPosition:'center', width:'10em'}} alt="Avatar Tailwind CSS Component" />
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
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

          </label>
          <span className=""></span>
          <label className="btn  btn-ghost  ">

          <svg   onClick={borrar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
                      Quieres comprar este producto?
                  </p>
                </div>
              </div>
            </h3>

        {paymenturl ?  <div className="modal-action">
              <a
                href={paymenturl}
                htmlFor="Pagaritem"
                className="btn bg-green-500 text-white hover:bg-green-600 flex "
              >
                ir a Pagar!
              </a>

              <label
                htmlFor="Pagaritem"
                className="btn bg-red-500 text-white hover:bg-red-600 flex "
              >
                Cerrar
              </label>
            </div> :     <a
                href={paymenturl}
                htmlFor="Pagaritem"
                className="btn bg-green-500 text-white hover:bg-green-600 flex "
              >
              Generando pago........
              </a>}
              <label
                htmlFor="Pagaritem"
                className="btn bg-red-500 text-white hover:bg-red-600 flex  "
              >
                Cerrar
              </label>
            
          </div>
        </div>
      </tr>
    </tbody>
  );
}

export default Cartitem;
