import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductTable({
  products,
  search,
  setSearch,
  modalOpen,
  setModalOpen,
  handleChange,
  handleSubmit,
  formData,
}) {
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold">Products</h2>
          <p className="text-[#359078] text-xl">Choose different variety of product</p>
        </div>

        <button
          className="bg-[#359078] text-white px-4 py-2 rounded"
          onClick={() => setModalOpen(true)}
        >
          <FontAwesomeIcon icon={faPlus} /> Add Product
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#359078] text-white">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Price ($)</th>
              <th className="px-4 py-2 border">Final Price ($)</th>
              <th className="px-4 py-2 border">Brand</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Stock</th>
              <th className="px-4 py-2 border">Thumbnail</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p, index) => (
              <tr key={p.id} className="hover:bg-gray-100 cursor-pointer">
                <td className="border px-2 py-1">{index + 1}</td>
                <td className="border px-2 py-1">{p.title}</td>
                <td className="border px-2 py-1">{p.price}</td>
                <td className="border px-2 py-1">{p.finalPrice || p.price}</td>
                <td className="border px-2 py-1">{p.brand}</td>
                <td className="border px-2 py-1">{p.rating}</td>
                <td className="border px-2 py-1">{p.stock}</td>
                <td className="border px-2 py-1">
                  <img
                    src={p.thumbnail || "https://via.placeholder.com/150"}
                    alt={p.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border px-2 py-1">
                  {p.description.length > 50
                    ? `${p.description.slice(0, 50)}...`
                    : p.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border p-2 rounded col-span-2"
                  required
                />
                <input
                  type="number"
                  id="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  id="brand"
                  placeholder="Brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  step="0.1"
                  id="rating"
                  placeholder="Rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  id="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  type="url"
                  id="thumbnail"
                  placeholder="Thumbnail URL"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className="border p-2 rounded col-span-2"
                />
                <textarea
                  id="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border p-2 rounded col-span-2"
                />
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#359078] text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}