// ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

// data.js
const products = [
    {
      id: 1,
      image: "/images/product1.jpg",
      title: "Coke Heart Handbag (Comes In A Box)",
      price: "₦19,500",
    },
    {
      id: 2,
      image: "/images/product2.jpg",
      title: "OL6 - Fashion & Bag",
      price: "₦16,500",
    },
    {
      id: 3,
      image: "/images/product3.jpg",
      title: "Bag FL5 - ECLN 1720#",
      price: "₦15,500",
    },
    {
      id: 4,
      image: "/images/product4.jpg",
      title: "AL5 - David Jones (Stock Bag)",
      price: "₦23,000",
    },
  ];
  

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
