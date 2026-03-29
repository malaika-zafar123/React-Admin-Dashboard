import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";

export default function ProductLogic() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products"));

    if (saved) {
      setProducts(saved);
    } else {
      fetch("https://dummyjson.com/products?limit=20")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          localStorage.setItem("products", JSON.stringify(data.products));
        });
    }
  }, []);

  return (
    <ProductTable
      products={products}
      search={search}
      setSearch={setSearch}
    />
  );
}