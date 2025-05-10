"use client";

import React from "react";
import Link from "next/link";
import "./Brands.css";

const BrandCard = ({ name, image, link }) => {
  return (
    <div className="brand-card">
      <Link href={link} className="brand-card__image-link">
        <div className="brand-card__image-overlay">
          <img src={image} alt={name} className="brand-card__image" />
          <div className="brand-card__content">
            <h3 className="brand-card__name">{name}</h3>
            <span className="brand-card__button">Shop Now</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
