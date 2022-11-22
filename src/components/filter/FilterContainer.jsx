import React from "react";
import { useDispatch } from "react-redux";
import { byOrderProducts, byOrderPrice } from "../../redux/actions";

const FilterContainer = () => {
  const dispatch = useDispatch();

  const handleByOrder = (e) => {
    e.preventDefault();
    dispatch(byOrderProducts(e.target.value));
  };

  const handleByOrderPrice = (e) => {
    e.preventDefault();
    dispatch(byOrderPrice(e.target.value));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <select className="select min-w-0 btn-ghost">
          <option disabled selected>
            Categories
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div className="flex-1">
        <select className="select min-w-0 btn-ghost">
          <option disabled selected>
            Brand
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div className="flex-1">
        <select
          className="select min-w-0 btn-ghost"
          onChange={(e) => handleByOrderPrice(e)}
        >
          <option disabled selected>
            Price
          </option>
          <option value="Max">Max</option>
          <option value="Min">Min</option>
        </select>
      </div>
      <div className="flex-1">
        <select
          className="select min-w-0 btn-ghost"
          onChange={(e) => handleByOrder(e)}
        >
          <option disabled selected>
            Order
          </option>
          <option value="Asc">A-Z</option>
          <option value="Desc">Z-A</option>
        </select>
      </div>
      <div className="flex-1">
        <select className="select min-w-0 btn-ghost">
          <option disabled selected>
            Rating
          </option>
          <option>Max</option>
          <option>Min</option>
        </select>
      </div>
    </div>
  );
};

export default FilterContainer;
