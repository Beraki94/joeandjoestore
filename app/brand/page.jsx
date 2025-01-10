"use client";

import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanityImage";
import BrandCard from "../components/brands/BrandCard";
import "./brandPage.css";

const BrandPage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "brand"]{
            name,
            slug,
            primaryLogo
          }`
        );

        if (data) {
          setBrands(data);
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  if (brands.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="brand-page">
      <h1 className="brand-page__title">Explore Our Brands</h1>
      <div className="brand-page__grid">
        {brands.map((brand, index) => (
          <BrandCard
            key={index}
            name={brand.name}
            image={urlFor(brand.primaryLogo).url()}
            link={`/brand/${brand.slug.current}`} // Correct path
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
