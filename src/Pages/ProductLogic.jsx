import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";


export default function ProductLogic() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discount: "",
    category: "",
    brand: "",
    rating: "",
    stock: "",
    thumbnail: "",
    description: "",
  });

  // Fetch products from API
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  // Handle modal input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Add product on modal submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalPrice = formData.price
      ? (formData.price - (formData.price * (formData.discount || 0)) / 100).toFixed(2)
      : 0;

    const newProduct = {
      id: Date.now(), // unique ID
      ...formData,
      finalPrice,
    };

    setProducts([newProduct, ...products]); // Add new product to table
    setFormData({
      title: "",
      price: "",
      discount: "",
      category: "",
      brand: "",
      rating: "",
      stock: "",
      thumbnail: "",
      description: "",
    });
    setModalOpen(false); // Close modal
  };

  return (
    <ProductTable
      products={products}
      search={search}
      setSearch={setSearch}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
    />
  );
}