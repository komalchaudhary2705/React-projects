import React, { useState } from 'react'
import productsData from '../assets/data'
import ProductCard from '../components/ProductCard'

const Kids = () => {
    const [apiData,setApiData] = useState(productsData);
    const kidsData = apiData.filter((data)=>data.category === 'kids');
    
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
    <div className='px-[6%]'>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center my-12">
        Shop by <span className="text-teal-600">Kids</span>
      </h2>
           {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kidsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          ))}
        </div>
    </div>
  )
}

export default Kids