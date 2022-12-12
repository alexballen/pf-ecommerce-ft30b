import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { banerProductId, restoreBanerProductId } from "../../redux/actions";

const BanProduct = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);

  /* const handleBan = () => {
    swal({
      title: "Esta seguro?",
      text: "Una vez baneado, ¡El producto no estara disponible para los clientes! ¡☠!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        dispatch(banerProductId(id));
        swal("¡🙈🙉🙊! ¡El Producto ha sido baneado!", {
          icon: "success",
        });
      } else {
        swal("¡😅! ¡El Producto seguira visible para los clientes!");
      }
    });
  }; */

  const handleRestore = () => {
    swal({
      title: "Esta seguro?",
      text: "Una vez restaurado, ¡El producto sera visible para todos los clientes! ¡☠!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        dispatch(restoreBanerProductId(id));
        swal("¡🙈🙉🙊! ¡El Producto ha sido restaurado con exito!", {
          icon: "success",
        });
      } else {
        swal("¡😅! ¡El Producto seguira bloqueado!");
      }
    });
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className="flex flex-row justify-center mb-3">
      <h1>Banear Producto</h1>
      <input
        className="mx-2 input input-bordered input-xs w-full max-w-xs"
        onChange={handleChange}
        type="input"
        placeholder="Id del Producto"
      />
      {/* <button onClick={handleBan} className="btn btn-xs">
        Banear
      </button> */}
      <button onClick={handleRestore} className="btn btn-xs ml-2">
        Restaurar
      </button>
    </div>
  );
};

export default BanProduct;
