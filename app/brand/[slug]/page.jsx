"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Adjust depending on your router setup
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import ProductCard from "../../components/products/ProductCard";
import "../brandPage.css";
import BrandSlider from "@/app/components/brands/BrandSlider";

const BrandDetailsPage = () => {
  const { slug } = useParams(); // Get the dynamic slug from the route
  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const [brandData, productData] = await Promise.all([
          client.fetch(
            `*[_type == "brand" && slug.current == $slug][0]{
              name,
              description,
            }`,
            { slug }
          ),
          client.fetch(
            `*[_type == "product" && brand[0]->slug.current == $slug]{
              _id,
              name,
              price,
              originalPrice,
              images[0],
              slug,
              "brandName": brand[0]->name
            }`,
            { slug }
          ),
        ]);

        setBrand(brandData);
        setProducts(
          productData.map((product) => ({
            ...product,
            imageUrl: product.images
              ? urlFor(product.images).url()
              : "/placeholder.jpg",
          }))
        );
      } catch (error) {
        console.error("Error fetching brand details:", error);
      }
    };

    if (slug) {
      fetchBrandData();
    }
  }, [slug]);

  if (!brand || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="brand-details-page">
      <div className="brand-details-page__header">
        <BrandSlider />
        <h1 className="brand-details-page__name">{brand.name}</h1>
        <p className="brand-details-page__description">{brand.description}</p>
      </div>
      <div className="brand-details-page__products">
        {products.length ? (
          products.map((product) => (
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
          <p>No products available for this brand.</p>
        )}
      </div>
    </div>
  );
};

export default BrandDetailsPage;
