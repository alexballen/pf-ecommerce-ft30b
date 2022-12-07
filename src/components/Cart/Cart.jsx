/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleancart } from "../../redux/actions";
import Cartitem from "./Cartitem";
import { comprartodo, clearlink } from "../../redux/actions";

function Cart() {
  const dispatch = useDispatch();

  const { Cartitems } = useSelector((state) => state.Cart);
  const { loggedUser } = useSelector((state) => state.user);
  const { total } = useSelector((state) => state.Cart);

  const { pagarcarrito } = useSelector((state) => state.Cart);
  const userId = loggedUser?.id;

  function limpiarcart() {
    dispatch(cleancart(userId));
    dispatch(clearlink());
  }

  function Pagartodo() {
    dispatch(comprartodo(Cartitems,userId));
  }

  useEffect(() => {}, [Cartitems.length, total]);
console.log(loggedUser)
  return (
    <>
      {Cartitems.length ? (
        <div className="overflow-x-auto w-full    mt-10 font-bold">
          <table className="table w-full   ">
            <thead>
              <tr className="text-center ">
                <th className="bg-stone-800  w-10  text-center text-white rounded-none ">
                  Producto
                </th>
                <th className="bg-stone-800 text-white">Precio</th>
                <th className="bg-stone-800 text-white "> </th>
                <th className="bg-stone-800 text-white ">Cantidad </th>
                <th className="bg-stone-800 text-white ">Total</th>
                <th className="bg-stone-800 text-white ">Disponibles</th>
                <th className="bg-stone-800 text-white text-center rounded-none">
                  Comprar
                </th>
              </tr>
            </thead>
            {Cartitems.length
              ? Cartitems.map((e, i) => {
                  return (
                    <Cartitem
                      quantity={e.quantity}
                      key={i}
                      name={e.name}
                      id={e.id}
                      image={e.photos[0].url}
                      stock={e.stock}
                      unitPrice={e.unitPrice}
                    />
                  );
                })
              : ""}
            <tfoot>
              <tr className="text-center ">
                <th className="bg-stone-800 text-center text-white rounded-none ">
                  Producto
                </th>
                <th className="bg-stone-800 text-white ">Precio</th>
                <th className="bg-stone-800 text-white "> </th>
                <th className="bg-stone-800 text-white ">Cantidad </th>
                <th className="bg-stone-800 text-white ">Total</th>
                <th className="bg-stone-800 text-white  ">Disponibles</th>
                <th className=" bg-sky-600 text-white  rounded-none  text-center">
                  Total a pagar ${total}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className="alert alert-info mt-60  rounded-none justify-center shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current  flex-shrink-0 w-20  h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-white text-center content-center   font-bold">
              Tu carrito de compras esta vacio, ve y agrega algo para poder
              comprar.
            </span>
          </div>
        </div>
      )}

      {Cartitems.length && (
        <>
          <div className=" bg-sky-600  flex  text-white   ">
            <label
              onClick={Pagartodo}
              htmlFor="Pagartodo"
              className="btn w-full rounded-none  text-center bg-green-500 border-none hover:bg-green-600 text-white  font-bold   "
            >
              Comprar todo
            </label>
          </div>
          <div className="bg-red-600 text-white flex    ">
            <button
              onClick={limpiarcart}
              className="btn w-full rounded-none  text-center hover:red-600  bg-red-500 border-none   text-white  font-bold      "
            >
              Limpiar Carrito
            </button>
          </div>
        </>
      )}





      <input type="checkbox" id="Pagartodo" className="modal-toggle " />
      <div className="modal  ">
        <div className="modal-box    ">
          <h3 className="font-bold text-lg">
            <div className="alert   shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-10 w-"
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

                <p className="py-4 text-black font-bold  ">
                  Quieres comprar todo Los Productos en el carrito?
                </p>
              </div>
            </div>
          </h3>

      


          {pagarcarrito  ?     <div className="modal-action ">
           <a
              href={pagarcarrito}
              htmlFor="Pagartodo"
              className="btn   text-white hover:bg-green-600 flex  "
            >
              ir a Pagar!
            </a>

            <label
              htmlFor="Pagartodo"
              className="btn  text-white hover:bg-red-600  flex "
            >
              Cerrar
            </label>          </div> 
            : <a
              href={pagarcarrito}
              htmlFor="Pagartodo"
              className="btn bg-green-500 text-white hover:bg-green-600 content-center  flex   "
            >
         Generando pago......
            </a>}
            <label
              htmlFor="Pagartodo"
              className="btn bg-red-500 text-white hover:bg-red-600 flex  "
            >
              Cerrar
            </label> 
            
 
        </div>
      </div>
    </>
  );
}

export default Cart;
