"use client";

import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanityImage";
import BrandCard from "../components/brands/BrandCard";
import PageHeader from "../components/pageHeader/PageHeader";
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

  return (
    <div className="brand-page container">
      <PageHeader title="Explore Our Brands" />
      {brands.length === 0 ? (
        <div className="brand-page__loading">Loading brands...</div>
      ) : (
        <div className="brand-page__grid">
          {brands.map((brand) => (
            <BrandCard
              key={brand.slug.current}
              name={brand.name}
              image={urlFor(brand.primaryLogo).url()}
              link={`/brand/${brand.slug.current}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandPage;
