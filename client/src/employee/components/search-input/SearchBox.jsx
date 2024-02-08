import React from "react";
import "./SearchBox.css";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="container search-box">
      <div className="input-group mt-3 mx-auto">
        <span className="input-group-text rounded-circle">
          <FiSearch />
        </span>
        <input
          type="text"
          className="form-control py-2 border-0 outline-0"
          aria-label="Amount (to the nearest dollar)"
          placeholder="Job title or keyword"
        />
        <button className="input-group-text rounded-5 px-3">
          <IoLocationOutline className="me-1" /> Any location
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
