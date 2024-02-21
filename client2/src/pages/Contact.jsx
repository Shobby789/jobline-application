import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="container-fluid bg-light px-0 py-5">
        <div className="container py-5 mb-2">
          <h2 className="fw-bold text-center">Contact</h2>
          <p className="text-secondary text-small text-center">
            Home / Contact
          </p>
        </div>
      </div>
      <div className="container-fluid border-bottom py-5">
        <div className="container py-5 px-lg-5">
          <div className="row px-lg-5">
            <div className="col-4 d-flex flex-column align-items-center gap-2 ">
              <div className="ps-0">
                <CiLocationOn style={{ height: "2.5rem", width: "2.5rem" }} />
              </div>
              <h6 className="fw-semibold">Address</h6>
              <p className="text-secondary text-medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit!
              </p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center gap-2 ">
              <div>
                <CiMobile3 style={{ height: "2.5rem", width: "2.5rem" }} />
              </div>
              <h6 className="fw-semibold">Call Us</h6>
              <p className="text-secondary text-medium">012 345 6789</p>
            </div>
            <div className="col-4 d-flex flex-column align-items-center gap-2 ">
              <div>
                <MdOutlineEmail style={{ height: "2.5rem", width: "2.5rem" }} />
              </div>
              <h6 className="fw-semibold">email</h6>
              <p className="text-secondary text-medium">
                smshoaib2001@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="container px-lg-5 py-5">
          <form className="contact-form py-lg-5 border rounded-4">
            <div className="container px-lg-5 mb-4">
              <h5 className="semibold">Leave A Message</h5>
            </div>
            <div className="row px-lg-5 mt-3">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="Name" className="form label mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="Your Name*"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="Name" className="form label mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control py-3 text-medium"
                  placeholder="Your Email*"
                />
              </div>
            </div>
            <div className="container mb-3 px-lg-5">
              <label htmlFor="subject" className="form label mb-2">
                Subject
              </label>
              <input
                type="text"
                className="form-control py-3 text-medium"
                placeholder="Subject*"
              />
            </div>
            <div className="container mb-3 px-lg-5">
              <label htmlFor="message" className="form label mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="form-control w-100 py-3 text-medium"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <div className="container px-lg-5 text-end pt-3">
              <button
                className="btn btn-dark px-3 py-2 text-medium rounded-5"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
