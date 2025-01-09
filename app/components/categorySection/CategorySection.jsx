"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import ProductCard from "../products/ProductCard";
import Link from "next/link";
import "./CategorySection.css";

const CategorySection = ({ initialCategories = [], initialProducts = [] }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [activeCategory, setActiveCategory] = useState("shop-all");
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch categories on mount if not passed via SSR/props
  useEffect(() => {
    if (initialCategories.length === 0) {
      client
        .fetch(`*[_type == "category"] | order(title asc) { _id, title }`)
        .then((data) => setCategories(data))
        .catch(console.error);
    }
  }, [initialCategories]);

  // Fetch products based on active category
  useEffect(() => {
    setIsLoading(true);

    const query =
      activeCategory === "shop-all"
        ? `*[_type == "product"] | order(_createdAt desc) {
          _id,
          name,
          price,
          originalPrice,
          images[0],
          "brandName": brand[0]->name
        }`
        : `*[_type == "product" && $categoryId in categories[]._ref] {
          _id,
          name,
          price,
          originalPrice,
          images[0],
          "brandName": brand[0]->name
        }`;

    client
      .fetch(query, { categoryId: activeCategory })
      .then((data) =>
        setProducts(
          data.map((product) => ({
            ...product,
            imageUrl: product.images ? urlFor(product.images).url() : "/placeholder.jpg",
          }))
        )
      )
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [activeCategory]);

  return (
    <section className="category-section">
      <div className="category-navigation">
        <button
          className={`category-tab ${activeCategory === "shop-all" ? "active" : ""}`}
          onClick={() => setActiveCategory("shop-all")}
        >
          Shop All
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            className={`category-tab ${activeCategory === category._id ? "active" : ""}`}
            onClick={() => setActiveCategory(category._id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="category-items category-list">
        {isLoading ? (
          <p>Loading products...</p>
        ) : products.length ? (
          products.slice(0, 9).map((product) => (
            <ProductCard
              key={product._id}
              image={product.imageUrl}
              title={product.name}
              price={`₦${product.price}`}
              brand={product.brandName || "Unknown Brand"}
            />
          ))
        ) : (
          <div className="empty-state-container">
            <p className="empty-state">No products found for this category.</p>
            <Link href="/shop-all" className="shop-more-button">
              Shop More
            </Link>
          </div>
        )}

        {products.length > 0 && (
          <Link href="/shop-all" className="shop-more-button">
            Shop More
          </Link>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
