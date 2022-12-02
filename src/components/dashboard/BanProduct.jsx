import React from "react";

const BanProduct = () => {
  return (
    <div className="flex flex-row justify-center mb-3">
      <h1>Banear Producto</h1>
      <input
        className="mx-2 input input-bordered input-xs w-full max-w-xs"
        type="banear"
        placeholder="Id del Producto"
      />
      <button className="btn btn-xs">Banear</button>
    </div>
  );
};

export default BanProduct;
