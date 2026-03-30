import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductTable({ search, setSearch }) {
  const navigate = useNavigate();

  // ✅ products state (no reload needed)
  const [products, setProducts] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    brand: "",
    stock: "",
    thumbnail: "",
    description: "",
  });

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  // ✅ filter
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // ✅ ADD + EDIT
  const handleSubmit = (e) => {
    e.preventDefault();

    let updated;

    if (editId) {
      updated = products.map((p) =>
        p.id === editId ? { ...p, ...formData } : p
      );
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
      };
      updated = [newProduct, ...products];
    }

    // update state + localStorage
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));

    // reset
    setModalOpen(false);
    setEditId(null);
    setFormData({
      title: "",
      price: "",
      brand: "",
      stock: "",
      thumbnail: "",
      description: "",
    });
  };

  // ✅ delete (no reload)
  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold dark:text-white">Products</h2>

        <div className="flex gap-2">
          <button
            onClick={() => {
              setEditId(null);
              setFormData({
                title: "",
                price: "",
                brand: "",
                stock: "",
                thumbnail: "",
                description: "",
              });
              setModalOpen(true);
            }}
            className="bg-[#359084] text-white px-4 py-2 rounded"
          >
            Add Product
          </button>

          <button
            onClick={() => navigate("/details")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Details
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 dark:text-white w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <table className="w-full border dark:text-white">
        <thead className="bg-[#359078] text-white">
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">Title</th>
            <th className="p-4">Price</th>
            <th className="p-4">Brand</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((p, index) => (
            <tr key={p.id} className="text-center border">
              <td>{index + 1}</td>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>{p.brand}</td>
              <td>{p.stock}</td>

              <td className="flex gap-2 justify-center py-2">
                {/* EDIT */}
                <button
                  onClick={() => {
                    setEditId(p.id);
                    setFormData(p);
                    setModalOpen(true);
                  }}
                  className="bg-[#359078] text-white px-2 py-1 rounded"
                >
                  Edit
                </button>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-blue-400 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">
              {editId ? "Edit Product" : "Add Product"}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input id="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded" required />
              <input id="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" />
              <input id="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="border p-2 rounded" />
              <input id="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="border p-2 rounded" />
              <input id="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="Image URL" className="border p-2 rounded" />
              <textarea id="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded" />

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-[#359078] text-white px-3 py-1 rounded"
                >
                  {editId ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}