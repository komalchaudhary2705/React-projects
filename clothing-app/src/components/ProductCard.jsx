import React, { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa6";
import { AiFillEdit, AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";

const ProductCard = ({ product, deleteProduct, updateProduct }) => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingCard, setLoadingCard] = useState(true);

  //  loading effect handle by useEffect
  useEffect(() => {
    setTimeout(() => setLoadingCard(false), 500);
  }, []);

  const handleDelete = () => {
    setLoadingDelete(true);
    setTimeout(() => {
      deleteProduct(product.id);
      setLoadingDelete(false);
    }, 300);
  };

  const handleFormSubmit = (updatedData) => {
    updateProduct({ ...product, ...updatedData });
    setIsEditing(false);
  };

  if (loadingCard) {
    return (
      <div className="bg-white rounded shadow p-5 animate-pulse">
        <div className="w-full h-[230px] bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="w-full h-10 bg-gray-300 rounded "></div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded shadow p-5 relative">
      {/* image */}
      <div className="w-full h-[230px] overflow-hidden rounded">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
      </div>

      {/* icons view , edit , delete */}
      <div
        className="hidden group-hover:flex flex-col gap-3 absolute top-5 
      right-5 bg-white p-2 rounded-r shadow-md"
      >
        <div
          className="text-teal-600 cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <FaRegEye size={25} />
        </div>

        <div
          className="text-blue-600 cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          <AiFillEdit size={25} />
        </div>

        <div className="text-red-600 cursor-pointer" onClick={handleDelete}>
          {loadingDelete ? (
            <AiOutlineLoading3Quarters size={25} className="animate-spin" />
          ) : (
            <RiDeleteBin6Fill size={25} />
          )}
        </div>
      </div>
      {/* Product title , price , add cart button*/}
      <div>
        <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
        <p className="text-xl font-bold text-teal-600 mt-2">${product.price}</p>

        <button
          className="mt-4 w-full py-2 rounded bg-teal-600 text-white
       hover:bg-teal-700 cursor-pointer"
        >
          Add Cart
        </button>
      </div>

      {/* EDIT POPUP FORM */}
      {isEditing && (
        <ProductForm
          defaultData={product}
          onSubmit={handleFormSubmit}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
