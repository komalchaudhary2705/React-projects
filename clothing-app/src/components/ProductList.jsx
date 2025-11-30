import React, { useState } from "react";
import productsData from "../assets/data";

const ProductList = () => {
  const [apiData, setApiData] = useState(productsData);
  console.log(apiData);

  return <div>
    
  </div>;
};

export default ProductList;
