import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productsData, deleteProduct, updateProduct }) => {
  // unique category
  const categories = [...new Set(productsData.map((p) => p.category))];
  const fourProductsPerCat = categories.map((cat) => {
    const items = productsData.filter((p) => p.category === cat);
    return items.slice(0,4);
  });
 
  const displayedProducts = fourProductsPerCat.flat();

  return (
    <div className="w-full py-16 px-6 md:px-[7vw] bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
        Featured <span className="text-teal-600">Products</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
