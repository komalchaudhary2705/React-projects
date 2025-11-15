import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import FeaturedProducts from "./components/FeaturedProducts";
import Blog from "./components/Blog";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Products/>
      <Testimonials/>
      <FeaturedProducts/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default App;
