/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cleancart, clearlink } from "../../redux/actions";
import { addcomprado } from "../../redux/actions";

function CartPayments() {
 
  const dispatch = useDispatch();
  const {id} = useParams()
  const { loggedUser } = useSelector((state) => state.user);
  const userId = loggedUser?.id;
  const { Cartitems } = useSelector((state) => state.Cart);
  const { Comprados } = useSelector((state) => state.Cart);
  function cleabcart() {
    for(let e of Cartitems){
      dispatch(addcomprado(e))
    }

    if (userId) {
      dispatch(cleancart(userId));
      dispatch(clearlink());
    }
  }
  console.log(Cartitems) 
  console.log(Comprados)
  useEffect(() => {
    
    for(let e of Cartitems){
      dispatch(addcomprado(e))
    }
    
    dispatch(cleancart(userId));
    dispatch(clearlink());
  }, []);

  return (
    <div>
      <div
        className="hero   min-h-screen"
        style={{
          backgroundImage: `url("https://fondosmil.com/fondo/17538.jpg")`,
        }}
      >
        <div className="   bg-opacity-60"></div>
        <div className="hero-content   text-center text-neutral-content">
          <div className="max-w-md  ">
            <h1 className="    font-bold">
              <img
                className=" mr-4  inline  "
                alt="malpago"
                src="https://www.ispmalaga.es/wp-content/uploads/2019/11/success.png"
              ></img>
            </h1>
            <p className="mb-5 text-black text-bold font-bold">
              Pago realizado correctamente disfute de sus productos.
            </p>
            <Link to={"/"}>
              <button onClick={cleabcart} className="btn btn-accent">
                Ir a comprar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPayments;
