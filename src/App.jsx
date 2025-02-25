import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/pricing";
import Workflow from "./components/Workflow";
import Testimonials from "./components/TEstimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
    </>
  );
};

export default App;
