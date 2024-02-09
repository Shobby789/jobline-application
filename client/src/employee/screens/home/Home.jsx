import React from "react";
import Hero from "../../components/hero/Hero";
import Recommended from "../../containers/recommended/Recommended";
import FeaturedJobs from "../../containers/featured-jobs/FeaturedJobs";
import Reviews from "../../containers/reviews/Reviews";
// import Count from "../../containers/count/Count";

const Home = () => {
  return (
    <>
      <Hero />
      <Recommended />
      {/* <Count /> */}
      <FeaturedJobs />
      <Reviews />
    </>
  );
};

export default Home;
