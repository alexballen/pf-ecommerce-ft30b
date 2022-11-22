/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { GetProductSearched } from "../../redux/actions";

function Searchbar() {
  const dispatch = useDispatch();
  const [searchedproduct, setsearched] = useState();

  function search() {
    dispatch(GetProductSearched(searchedproduct));
  }
  function searched(e) {
    const product = e.target.value;
    setsearched(product);
  }

  return (
    <div className="  ">
      <div className="form-control pr-1">
        <input
          onChange={searched}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
      <button
        onClick={search}
        className="btn  w-20 btn-primary rounded text-white  text-lg  normal-case"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  );
}

export default Searchbar;
