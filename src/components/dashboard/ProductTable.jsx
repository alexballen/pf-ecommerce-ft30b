import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProductId } from "../../redux/actions/index";
import FilterProducts from "./FilterProducts";
import swal from "sweetalert";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { filteredProducts: products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = (e) => {
    swal({
      title: "Esta seguro?",
      text: "Una vez eliminado, ¡No podrá recuperar este Producto! ¡☠!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        dispatch(deleteProductId(e));
        swal("¡🙈🙉🙊! ¡Tu Producto ha sido eliminado!", {
          icon: "success",
        });
      } else {
        swal("¡😅! ¡Tu Producto está a salvo!");
      }
    });
  };

  const handleEdit = (e) => {
    swal({
      title: "Deseas editar el producto?",
      text: "Una vez editado, ¡No podras restaurar sus modificaciones! ¡🖐🖌!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        //window.location.href = `/editproduct/${e}`;
        swal(
          "¡👍! ¡En el momento tenemos problemas para editar el producto, intenta mas tarde!"
        );
      } else {
        swal("¡👍! ¡Tu Producto no sufrio cambios!");
      }
    });
  };

  return (
    <>
      <div className="mx-6 border-b sticky top-0">
        <FilterProducts />
      </div>
      <div className="mx-6 bg-stone-300">
        <table className="w-full">
          <thead className="bg-stone-400 border-b sticky top-24">
            <tr>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                N°
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Nombre
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Cantidad Disponible
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Categoria
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Marca
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Precio Unitario
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Editar Producto
              </th>
              <th className="outline outline-1 outline-base-100 px-4 py-2 text-base-100 hover:bg-stone-500">
                Eliminar Producto
              </th>
            </tr>
          </thead>
          {products &&
            products.map((e, i) => (
              <tbody>
                <tr>
                  <td className="border border-white px-4 py-2">
                    <div className="flex justify-center">{i + 1}</div>
                  </td>
                  <td className="border border-white px-4 py-2">{e.name}</td>
                  <td className="border border-white px-4 py-2">
                    <div className="flex justify-center">{e.stock}</div>
                  </td>
                  <td className="border border-white px-4 py-2">
                    {e.categories.map((e) => `${e.name}, `)}
                  </td>
                  <td className="border border-white px-4 py-2">
                    {e.brand.name}
                  </td>
                  <td className="border border-white px-4 py-2">
                    <div className="flex justify-center">{e.unitPrice}</div>
                  </td>
                  <td className="border border-white px-4 py-2">
                    <button onClick={() => handleEdit(e.id)} className="btn">
                      Editar
                    </button>
                  </td>
                  <td className="border border-white px-4 py-2">
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

export default ProductTable;
