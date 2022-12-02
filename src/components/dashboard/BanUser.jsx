import React from "react";

const BanUser = () => {
  return (
    <div className="flex flex-row justify-center mb-3">
      <h1 className="w-full">Banear Usuario</h1>
      <input
        className="input input-bordered input-xs w-full max-w-xs mr-2"
        type="banear"
        placeholder="Id de Usuario"
      />
      <button className="btn btn-xs">Banear</button>
    </div>
  );
};

export default BanUser;
