/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { GetProductById } from "../../redux/actions";
import { useEffect } from "react";

import Nav from "../Nav/Nav";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [ammoutstock, setbuy] = useState();
  const { product } = useSelector((state) => state.products);
  function getvalue(e) {
    const ammoutn = e.target.value;
    setbuy(ammoutn);
  }
  useEffect(() => {
    dispatch(GetProductById(id));
  }, []);

  return (
    <section className="body-font overflow-hidden   bg-base-500   ">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap p-10 m-10">
          <div className="h-96 carousel carousel-vertical rounded-box">
            {product.photos
              ? product.photos.map((e, i) => {
                  return (
                    <div key={i} className="carousel-item h-full">
                      <img alt="imagetext" src={e.url} />
                    </div>
                  );
                })
              : "no image found"}
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm  text-white title-font  tracking-widest">
              {product.brand ? product.brand.name : "no product brand found"}
            </h2>
            <h2 className="text-sm  text-white title-font  tracking-widest">
              {product.categories
                ? product.categories.map((e, i) => {
                    return (
                      <h2 className="badge  text-white bg-blue-500  ">
                        {e.name}
                      </h2>
                    );
                  })
                : "no product gender found"}
            </h2>
            <h1 className="text-white  text-3xl title-font font-medium mb-1">
              {product ? product.name : "no product name found"}
            </h1>
            <div className="flex mb-4">
              <span className="badge  text-white bg-blue-500  ">
                {product ? product.rating : "no product rate"}⭐
              </span>
            </div>

            <p className="leading-relaxed text-white">
              {product ? product.description : "no Product description"}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex ml-6 items-center">
                <span className="title-font text-white font-medium text-2xl  ">
                  Stock: {product ? product.stock : "no stock found"}
                </span>
                <div className="relative p-5">
                  <input
                    min={1}
                    onChange={getvalue}
                    max={product.stock}
                    className="rounded border text-center title-font text-white   appearance-none border-gray-400 py-2  text-base   "
                    type={"number"}
                  ></input>
                </div>
                <span className="title-font text-white font-medium text-2xl  ">
                  total: ${ammoutstock ? product.unitPrice * ammoutstock : 0}
                </span>
              </div>
            </div>
            <div className=" flex  ">
              <div className="flex-1 "></div>
              <span className="title-font text-white font-medium text-2xl  ">
                ${product ? product.unitPrice : 0}
              </span>

              <div className="flex-1 "></div>
              <button className="     ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Add to cart
              </button>
              <div>
                <button className="      ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
