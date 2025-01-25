"use client";

import React, { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanityImage";
import PageHeader from "../components/pageHeader/PageHeader";
import ProductCard from "../components/products/ProductCard";
import "./shop-all.css";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      client.fetch(`*[_type == "category"] | order(title asc) { _id, title }`),
      client.fetch(
        `*[_type == "product"] {
          _id,
          name,
          price,
          originalPrice,
          images[0],
          categories,
          slug,
          "brandName": brand[0]->name
        }`
      ),
    ])
      .then(([categoryData, productData]) => {
        setCategories(categoryData);
        setProducts(
          productData.map((product) => ({
            ...product,
            imageUrl: product.images
              ? urlFor(product.images).url()
              : "/placeholder.jpg",
          }))
        );
      })
      .catch(console.error);
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) =>
          product.categories.some((category) => category._ref === activeCategory)
        );

  return (
    <div className="shop-page container">
      <PageHeader title="Shop All Products" />
      <div className="shop-page__categories">
        <button
          className={`shop-category ${
            activeCategory === "all" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            className={`shop-category ${
              activeCategory === category._id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category._id)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="shop-page__products">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              image={product.imageUrl}
              title={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              brand={product.brandName}
              slug={product.slug.current}
            />
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
