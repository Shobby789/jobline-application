import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import FeaturedJobs from "./containers/featured-jobs/FeaturedJobs";
import Footer from "./containers/footer/Footer";
import Recommended from "./containers/recommended/Recommended";
import Reviews from "./containers/reviews/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Recommended />
      <FeaturedJobs />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
