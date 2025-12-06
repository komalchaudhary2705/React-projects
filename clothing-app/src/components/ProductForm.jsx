import React, { useState } from "react";

const ProductForm = ({ defaultData, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({...defaultData});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-[#80808073] flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 relative shadow-xl">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="text-2xl font-semibold mb-4">Product Form</h2>

        <form onSubmit={() => onSubmit(formData)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Category</option>
              <option value="kids">Kids</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows="3"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Paste image URL..."
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded font-semibold hover:bg-teal-700"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
