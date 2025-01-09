"use client";

import React from "react";
import Link from "next/link";
import "./Products.css";

const ProductCard = ({ image, title, price, originalPrice, brand, slug }) => {
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className="product-card">
      <Link href={`/product/${slug}`} className="product-card__link">
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          className="product-card__image"
        />
        <div className="product-card__details">
          <p className="product-card__brand">{brand || "Unknown Brand"}</p>
          <h3 className="product-card__title">{title}</h3>
          <div className="product-card__pricing">
            {hasDiscount && (
              <span className="product-card__original-price">
                ₦{originalPrice}
              </span>
            )}
            <span className="product-card__price">₦{price}</span>
          </div>
        </div>
      </Link>
      <button className="product-card__button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
