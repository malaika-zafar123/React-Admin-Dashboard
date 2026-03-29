import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("id");

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    brand: "",
    stock: "",
    thumbnail: "",
    description: "",
  });

  // LOAD DATA IF EDIT MODE
  useEffect(() => {
    if (editId) {
      const saved = JSON.parse(localStorage.getItem("products")) || [];
      const product = saved.find((p) => p.id == editId);
      if (product) setFormData(product);
    }
  }, [editId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("products")) || [];

    let updated;

    if (editId) {

      updated = saved.map((p) =>
        p.id == editId ? { ...p, ...formData } : p
      );
    } else {
      // ADD
      const newProduct = {
        id: Date.now(),
        ...formData,
      };
      updated = [newProduct, ...saved];
    }

    localStorage.setItem("products", JSON.stringify(updated));

    navigate("/");
  };

  return (
    <div className="  bg-white dark:bg-gray-900 p-8">
      <h2 className="text-2xl mb-4 dark:text-white">
        {editId ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-3  dark:text-white max-w-md">
        <input className="border p-2 rounded-md" id="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input className="border p-2 rounded-md dark:focus:bg-gray-800" id="price" value={formData.price} onChange={handleChange} placeholder="Price" />
        <input className="border p-2 rounded-md" id="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" />
        <input className="border p-2 rounded-md" id="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
        <input className="border p-2 rounded-md" id="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="Image URL" />
        <textarea className="border p-2 rounded-md" id="description" value={formData.description} onChange={handleChange} placeholder="Description" />

        <button className="bg-[#359078] text-white p-2 rounded">
          {editId ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}