import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import productsData from "../assets/data";

const Home = () => {
  const [apiData, setApiData] = useState(productsData);

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    const newList = apiData.filter((item) => item.id !== id);
    setApiData(newList);
  };

  // EDIT / UPDATE PRODUCT
  const updateProduct = (updatedProduct) => {
    const newList = apiData.map((item) =>
      item.id === updatedProduct.id ? updatedProduct : item
    );
    setApiData(newList);
  };

  return (
    <div>
      <Hero />
      <ProductList
        productsData={apiData}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
    </div>
  );
};

export default Home;
