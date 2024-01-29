import React from "react";
import "./ReviewsSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const PrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

export const NextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const ReviewsSlider = ({ reviews }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const reviewsData = [
    {
      text: "Now you have a basic reviews slider in your React app using React Slick. Customize the styles, slider settings, and reviews data according to your requirements.",
      author: "John Doe",
    },
    {
      text: "Now you have a basic reviews slider in your React app using React Slick. Customize the styles, slider settings, and reviews data according to your requirements.",
      author: "Jane Smith",
    },
    {
      text: "Now you have a basic reviews slider in your React app using React Slick. Customize the styles, slider settings, and reviews data according to your requirements.",
      author: "John Doe",
    },
    {
      text: "Now you have a basic reviews slider in your React app using React Slick. Customize the styles, slider settings, and reviews data according to your requirements.",
      author: "Jane Smith",
    },
    // Add more reviews as needed
  ];
  return (
    <section className="container reviews-slider-wrapper">
      <div className="reviews-container">
        <Slider {...settings}>
          {reviewsData.map((r) => {
            return (
              <div className="review-slide" key={r.index}>
                <p className="mb-5">{r.text}</p>
                <h5 className="fw-semibold mb-3">{r.author}</h5>
                <p className="fw-semibold fs-6">Microsoft</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsSlider;
