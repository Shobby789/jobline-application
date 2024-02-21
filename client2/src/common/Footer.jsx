import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="container-fluid pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 pe-4 mb-3">
            <h3 className="fw-bold mb-3">Getjob</h3>
            <p className="text-secondary text-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              autem pariatur delectus dolores doloremque sint.
            </p>
            <div className="row">
              <div className="col-2">
                <TiSocialFacebook className="fs-5 external-link" />
              </div>
              <div className="col-2">
                <BiLogoLinkedin className="fs-5 external-link" />
              </div>
              <div className="col-2">
                <BiLogoInstagram className="fs-5 external-link" />
              </div>
              <div className="col-2">
                <RiTwitterXFill className="fs-6 external-link" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 px-0 mb-3">
            <h6 className="fw-bold ps-3 mb-3">Categories</h6>
            <ul className="list-group border-0 px-0">
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  ios Developers
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Andriod Developers
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Machine Learning
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  UI/UX Developers
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Program & Tech
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mb-3">
            <h6 className="fw-bold ps-3 mb-3">Community</h6>
            <ul className="list-group border-0 px-0">
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Events
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Blogs
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Forum
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Podcast
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mb-3">
            <h6 className="fw-bold ps-3 mb-3">About</h6>
            <ul className="list-group border-0 px-0">
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  About us
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Partnerships
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Product Manager
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Management
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mb-3">
            <h6 className="fw-bold ps-3 mb-3">Contact</h6>
            <ul className="list-group border-0 px-0">
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Contact us
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Press Center
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  Careers
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/"
                  className="text-decoration-none text-secondary text-medium"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-small text-secondary text-center">
          All Rights Reserved &copy;Getjobs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
