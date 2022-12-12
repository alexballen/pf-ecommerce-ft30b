import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byOrderUsers } from "../../redux/actions/index";
import SearchUser from "./SearchUser";
import BanUser from "./BanUser";
import RestoreUser from "./RestoreUser";

const FilterUsers = () => {
  const dispatch = useDispatch();

  //useEffect(() => {}, []);

  const handleByOrder = (e) => {
    e.preventDefault();
    dispatch(byOrderUsers(e.target.value));
  };

  return (
    <>
      <div className="flex flex-row justify-around content-evenly items-center bg-white mb-3">
        <div>
          <SearchUser />
        </div>
        <div>
          <RestoreUser />
        </div>
        {/*  <div>
          <select
            className="select min-w-0 btn-ghost"
            onChange={(e) => handleByOrderPrice(e)}
          >
            <option disabled selected>
              Usuario
            </option>
            <option value="MaxPrice">Cliente</option>
            <option value="MinPrice">Admin</option>
          </select>
        </div> */}
        <div>
          <select
            className="select min-w-0 btn-ghost"
            onChange={(e) => handleByOrder(e)}
          >
            <option>Orden</option>
            <option value="Asc">A-Z</option>
            <option value="Desc">Z-A</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterUsers;
