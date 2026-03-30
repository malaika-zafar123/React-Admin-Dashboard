import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";

export default function ProductLogic() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("products"));

  if (!saved || saved.length === 0) {
    // first time API call
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("products", JSON.stringify(data.products));
        setProducts(data.products);
      });
  } else {
    // already stored
    setProducts(saved);
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