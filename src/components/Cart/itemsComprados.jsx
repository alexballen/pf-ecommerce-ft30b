/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Itemscomprados({ name, image, compraid, indice }) {
  const { Comprados } = useSelector((state) => state.Cart);

  useEffect(() => {}, [Comprados]);

  return (
    <tbody>
      <tr>
        <label
          htmlFor="idcompra"
          className="btn text-center bg-black m-5 mt-10"
        >
          {indice+1}
        </label>

        <input type="checkbox" id="idcompra" className="modal-toggle   " />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg ">{compraid}</h3>
            <div className="modal-action">
              <label htmlFor="idcompra" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>

        <td>
          <div className="  items-center   content-center align-middle space-x-3">
            <div className="avatar text-center  content-center  align-middle  ">
              <td className="text-center ">
                <div className="   w-20 h-20">
                  <img
                    src={image}
                    style={{
                      objectFit: "scale-down",
                      objectPosition: "center",
                      width: "10em",
                    }}
                    alt="item comprado"
                  />
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
      </tr>
    </tbody>
  );
}

export default Itemscomprados;
