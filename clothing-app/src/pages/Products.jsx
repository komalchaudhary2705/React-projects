import React, { useState, useEffect } from "react";
import productsData from "../assets/data";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const [products, setProducts] = useState(productsData);

  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // DELETE
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // UPDATE
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  // FILTERING
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // reset page after filtering
  }, [products, search, selectedCategory]);

  // ---------------------------------------
  // SIMPLE PAGINATION LOGIC
  // ---------------------------------------
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const start = (currentPage - 1) * perPage;

  const paginatedProducts = filteredProducts.slice(start, start + perPage);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="p-4 md:p-6">
      <div className="md:flex md:gap-6">
        {/* SIDEBAR CATEGORIES */}
        <div className="md:w-1/5 bg-white shadow-sm rounded-lg p-4 mb-4 md:mb-0">
          <h2 className="font-bold mb-3 text-lg">Categories</h2>

          <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-3 py-1 rounded whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* MAIN PRODUCT AREA */}
        <div className="md:w-4/5 flex flex-col gap-4">

          {/* SEARCH + PER PAGE */}
          <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded w-full md:w-1/2"
            />

            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="border p-2 rounded"
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
            </select>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct}
              />
            ))}
          </div>

          {/* ------------------------------------
                EASY PAGINATION
          ------------------------------------ */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">

            {/* PREV */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-4 py-2 rounded 
                ${currentPage === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}
              `}
            >
              Prev
            </button>

            {/* PAGE BUTTONS */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 hover:bg-teal-600 hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* NEXT */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-4 py-2 rounded 
                ${currentPage === totalPages ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}
              `}
            >
              Next
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
