import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductTable({ products, search, setSearch }) {
  const navigate = useNavigate();

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updated));
    window.location.reload(); // simple refresh
  };

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen">

      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold dark:text-white">Products</h2>

        <div className="flex gap-2">
          <button
            onClick={() => navigate("/add")}
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

      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 dark:text-white w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border  dark:text-white">
        <thead className="bg-[#359078] text-white ">
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
                <button
                  onClick={() => navigate(`/add?id=${p.id}`)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}