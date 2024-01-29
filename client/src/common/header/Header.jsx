import React from "react";
import "./Header.css";
import SearchBox from "../../components/search-input/SearchBox";

const Header = ({ text, showSearchBox, height }) => {
  return (
    <section
      className="container-fluid header-wrapper py-5 d-flex align-items-center justify-content-center flex-column text-center"
      style={{ height: `${height}vh` }}
    >
      <div className="container pt-5">
        <h1 className="fw-semibold mb-5">{text}</h1>
        {showSearchBox === true ? <SearchBox /> : <></>}
      </div>
    </section>
  );
};

export default Header;
