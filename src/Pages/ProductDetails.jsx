import React, { useEffect, useState } from "react";

export default function ProductDetails() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 1. API data
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        
        // 2. localStorage data
        const localData =
          JSON.parse(localStorage.getItem("products")) || [];

        // 3. Merge both
        const merged = [...localData, ...data.products];

        setProducts(merged);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-[#0f172a] min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Product Details
      </h1>

      {/* SAME GRID UI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-[#1e293b] rounded-xl shadow-md p-4 hover:scale-105 transition"
          >
            <img
              src={p.thumbnail || "https://via.placeholder.com/150"}
              alt={p.title}
              className="w-full h-40 object-cover bg-amber-50 rounded-lg mb-3"
            />

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {p.title}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {p.brand}
            </p>

            <div className="flex items-center my-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="text-yellow-400">
                  {i < Math.round(p.rating || 0) ? "★" : "☆"}
                </span>
              ))}
            </div>

            <p className="text-[#22c55e] font-bold text-lg">
              ${p.price}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {p.description?.length > 60
                ? p.description.slice(0, 60) + "..."
                : p.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}