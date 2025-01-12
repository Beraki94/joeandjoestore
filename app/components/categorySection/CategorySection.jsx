"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import ProductCard from "../products/ProductCard";
import SectionHeader from "../sectionHeader/SectionHeader";
import Link from "next/link";
import "./CategorySection.css";

const CategorySection = ({ initialCategories = [], initialProducts = [] }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [activeCategory, setActiveCategory] = useState("shop-all");
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialCategories.length === 0) {
      client
        .fetch(`*[_type == "category"] | order(title asc) { _id, title }`)
        .then((data) => setCategories(data))
        .catch(console.error);
    }
  }, [initialCategories]);

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
      {/* Section Header */}
      <SectionHeader
        title="Our Categories"
        subtitle="Explore a variety of products tailored just for you."
      />

      <div className="category-layout">
        {/* Sticky Navigation */}
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

        {/* Product List */}
        <div className="category-items">
          {isLoading ? (
            <p>Loading products...</p>
          ) : products.length ? (
            <>
              <div className="category-list">
                {products.slice(0, 9).map((product) => (
                  <ProductCard
                    key={product._id}
                    image={product.imageUrl}
                    title={product.name}
                    price={`₦${product.price}`}
                    originalPrice={`₦${product.originalPrice}`}
                    brand={product.brandName || "Unknown Brand"}
                  />
                ))}
              </div>
              <div className="shop-more-container">
                <Link href="/shop-all" className="shop-more-button">
                  Shop More
                </Link>
              </div>
            </>
          ) : (
            <div className="empty-state-container">
              <p className="empty-state">No products found for this category.</p>
              <Link href="/shop-all" className="shop-more-button">
                Shop More
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
