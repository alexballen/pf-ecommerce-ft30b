/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from "../../redux/actions";

function SearchUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSearch = (e) => {
    setName(e.target.value);
    dispatch(searchUsers(e.target.value));
  };
  return (
    <div>
      <div className="form-control pr-1">
        <input
          /* onChange={(e) => handleSearch(e)} */
          value={name}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
    </div>
  );
}

export default SearchUser;
