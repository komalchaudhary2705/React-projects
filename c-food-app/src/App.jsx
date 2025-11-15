import React from "react";
import Navbar from "./component/Navbar";

import Discount from "./component/Discount";
import Menu from "./component/Menu";
import Products from "./component/Products";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Discount />
      <Menu />
      <Products />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
