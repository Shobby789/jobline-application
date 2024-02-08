import React from "react";
import Hero from "../../components/hero/Hero";
import Recommended from "../../containers/recommended/Recommended";
import FeaturedJobs from "../../containers/featured-jobs/FeaturedJobs";
import Reviews from "../../containers/reviews/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <Recommended />
      <FeaturedJobs />
      <Reviews />
    </>
  );
};

export default Home;
