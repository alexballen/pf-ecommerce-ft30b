/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import Cartitem from "./Cartitem";

function Historial() {
  const dispatch = useDispatch();

  const { Comprados } = useSelector((state) => state.Cart);
 
   
  useEffect(() => {}, [ ]);

  return (
    <>
     
        <div className="overflow-x-auto w-full    mt-10 font-bold">
          <table className="table w-full   ">
            <thead>
              <tr className="text-center ">
              <th className="bg-stone-800  w-10  text-center text-white rounded-none ">
                  id
                </th>
                <th className="bg-stone-800  w-10  text-center text-white rounded-none ">
                  Producto
                </th>
                <th className="bg-stone-800 text-white">Precio</th>
                <th className="bg-stone-800 text-white "> </th>
                <th className="bg-stone-800 text-white ">Cantidad </th>
   
              </tr>
            </thead>
            {Comprados.length
              ? Comprados.map((e, i) => {
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
              : "no hay items aun"}
            <tfoot>
              <tr className="text-center ">
              <th className="bg-stone-800  w-10  text-center text-white rounded-none ">
                  id
                </th>
                <th className="bg-stone-800 text-center text-white rounded-none ">
                  Producto
                </th>
                <th className="bg-stone-800 text-white ">Precio</th>
                <th className="bg-stone-800 text-white "> </th>
                <th className="bg-stone-800 text-white ">Cantidad </th>
                  
              </tr>
            </tfoot>
          </table>
        </div>
    
 

      
    </>
  );
}

export default Historial;
