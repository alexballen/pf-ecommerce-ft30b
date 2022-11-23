/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { GetProductById, GetProductByIdlocal } from "../../redux/actions";
import { useEffect } from "react";

import Nav from "../Nav/Nav";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  // dispatch(GetProductById(id));
  const { product } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(GetProductByIdlocal(id));
  }, []);

  // const product = {
  //   id: 1,
  //   name: "Handmade Rubber Hat",
  //   unitPrice: 196,
  //   description:
  //     "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  //   categories: {
  //     id: 5,
  //     name: "Others",
  //     image: "https://api.lorem.space/image?w=640&h=480&r=5378",
  //   },
  //   image: [
  //     "https://api.lorem.space/image?w=640&h=480&r=3909",
  //     "https://api.lorem.space/image?w=640&h=480&r=5987",
  //     "https://api.lorem.space/image?w=640&h=480&r=7945",
  //   ],
  // };
  return (
    <section className="body-font overflow-hidden   bg-base-500   ">
      <Nav />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap p-10 m-10">
          <div className="h-96 carousel carousel-vertical rounded-box">
            {product.image
              ? product.image.map((e, i) => {
                  return (
                    <div key={i} className="carousel-item h-full">
                      <img alt="imagetext" src={e} />
                    </div>
                  );
                })
              : "no image found"}
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm  text-white title-font  tracking-widest">
              {"product.brand"}
            </h2>
            <h1 className="text-white  text-3xl title-font font-medium mb-1">
              {product ? product.name : "no product name found"}
            </h1>
            <div className="flex mb-4">
              {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"></span> */}
            </div>

            <p className="leading-relaxed text-white">
              {product ? product.description : "no Product description"}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3 text-white text-xl ">stock</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-blue-500 text-base pl-3 pr-10">
                    <option>{"1"}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" flex  ">
              <div className="flex-1 "></div>
              <span className="title-font text-white font-medium text-2xl  ">
                ${product ? product.unitPrice : "no price found"}
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
