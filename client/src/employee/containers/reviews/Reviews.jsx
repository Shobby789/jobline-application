import React from "react";
import "./Reviews.css";
import ReviewsSlider from "../../components/reviews-slider/ReviewsSlider";

const Reviews = () => {
  return (
    <section className="container-fluid reviews-wrapper py-5">
      <div className="container py-4 text-center">
        <h3 className="fw-semibold mb-3">Why Customers Love Us</h3>
        <p className="mb-0">What our customers say about us</p>
      </div>
      <div className="container py-4">
        <ReviewsSlider />
      </div>
    </section>
  );
};

export default Reviews;
