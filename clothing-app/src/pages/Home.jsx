import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";

import productsData from "../assets/data";

const Home = () => {
  const [apiData, setApiData] = useState(productsData);

  return (
    <div>
      {/* <Hero /> */}
    
      <ProductList apiData={apiData} />
    </div>
  );
};

export default Home;
