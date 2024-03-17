import React from "react";
import ProductCard from "./ProductCard.jsx";
import data from "./data.js";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
