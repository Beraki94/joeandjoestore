import React from "react";
import "./Brands.css";

const BrandCard = ({ name, image, link }) => {
  return (
    <div className="brand-card">
      <img src={image} alt={name} className="brand-card__image" />
      <h3 className="brand-card__name">{name}</h3>
      <a href={link} className="brand-card__button">
        Shop Now
      </a>
    </div>
  );
};

export default BrandCard;
