import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid footer-wrapper py-5">
      <div className="container d-flex flex-column justify-content-center align-items-center gap-2 pt-3 text-center mb-3">
        <h3 className="text-light fw-semibold">
          Ready For Your Next Hire With Us?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          reprehenderit <br />
          beatae voluptatem nemo, odit placeat.
        </p>
        <button className="theme-button border-0">Hire With Us</button>
      </div>
      <div className="pt-4 pb-0 container d-flex justify-content-evenly align-items-center flex-wrap">
        <a href="">Jobline</a>
        <a href="">Browse Jobs</a>
        <a href="">Browse Companies</a>
        <a href="">Hire With Us</a>
        <a href="">Help</a>
      </div>
    </footer>
  );
};

export default Footer;
