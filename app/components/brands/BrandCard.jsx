"use client";

import React from "react";
import Link from "next/link";
import "./Brands.css";

const BrandCard = ({ name, image, link }) => {
  return (
    <div className="brand-card">
      <Link href={link}>
        <img src={image} alt={name} className="brand-card__image" />
      </Link>
      <h3 className="brand-card__name">{name}</h3>
      <Link href={link} className="brand-card__button">
        Shop Now
      </Link>
    </div>
  );
};

export default BrandCard;
