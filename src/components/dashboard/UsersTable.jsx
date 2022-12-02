import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, deleteUserId } from "../../redux/actions";
import FilterUsers from "./FilterUsers";
import swal from "sweetalert";

const UsersTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleDelete = (e) => {
    swal({
      title: "Esta seguro?",
      text: "Una vez eliminado, ¡No podrá restaurar el usuario! ¡☠!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        dispatch(deleteUserId(e));
        swal("¡🙈🙉🙊! ¡El Usuario ha sido eliminado!", {
          icon: "success",
        });
      } else {
        swal("¡😅! ¡El Usuario está a salvo!");
      }
    });
  };

  const handleEdit = (e) => {
    swal({
      title: "Deseas editar este Usuario?",
      text: "Una vez editado, ¡No podras restaurar sus modificaciones! ¡🖐🖌!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        //window.location.href = `/editproduct/${e}`;
        swal(
          "¡👍! ¡En el momento tenemos problemas para editar el usuario, intenta mas tarde!"
        );
      } else {
        swal("¡👍! ¡El Usuario no sufrio cambios!");
      }
    });
  };

  return (
    <>
      <div className="mx-6 border-b sticky top-0">
        <FilterUsers />
      </div>
      <div className="mx-6 bg-stone-300">
        <table className="w-full">
          <thead className="bg-stone-400 border-b sticky top-24">
            <tr>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                N°
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Foto
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Nombre Completo
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Usuario
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Correo
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                N° Telefono
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Fecha de Registro
              </th>
              {/* <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Nombre de Usuario
              </th> */}
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Editar
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Eliminar
              </th>
            </tr>
          </thead>
          {users &&
            users.map((e, i) => (
              <tbody>
                <tr>
                  <td className="border border-white px-4 py-2">
                    <div className="flex justify-center">{i + 1}</div>
                  </td>
                  <td className="border border-white px-4 py-2">
                    <div className="flex justify-center bg-red-600">
                      <img
                        src={e.photo.url}
                        alt="Not found"
                        className="w-full h-full"
                      />
                    </div>
                  </td>
                  <td className="border border-white px-4 py-2">
                    {e.fullName}
                  </td>
                  <td className="border border-white px-4 py-2">
                    {e.isAdmin === true ? "Administrador" : "Cliente"}
                  </td>
                  <td className="border border-white px-4 py-2">{e.email}</td>
                  <td className="border border-white px-4 py-2">
                    {e.phoneNumber}
                  </td>
                  <td className="border border-white px-4 py-2">
                    {e.unitedAt}
                  </td>
                  <td className="border border-white px-4 py-2">
                    <button onClick={() => handleEdit(e.id)} className="btn">
                      Editar
                    </button>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button onClick={() => handleDelete(e.id)} className="btn">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};

export default UsersTable;
