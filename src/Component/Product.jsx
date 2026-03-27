import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    stock: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  // 🔥 LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products"));
    if (saved) setProducts(saved);
  }, []);

  // 🔥 SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // EDIT
      const updated = products.map((p) =>
        p.id === editId ? { ...p, ...formData } : p
      );
      setProducts(updated);
      setEditId(null);
    } else {
      // ADD
      const newProduct = {
        id: Date.now(),
        ...formData,
      };
      setProducts([...products, newProduct]);
    }

    setFormData({ title: "", price: "", stock: "" });
    setModalOpen(false);
  };

  
  const handleDelete = (id) => {
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
  };

  
  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product.id);
    setModalOpen(true);
  };

  return (
    <ProductTable
      products={products}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      editId={editId}
    />
  );
}