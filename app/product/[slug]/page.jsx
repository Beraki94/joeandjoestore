"use client";

import React, { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react"; // Import Phosphor Icons
import { use } from "react";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import "../../product/productDetails.css";

const ProductDetails = ({ params: paramsPromise }) => {
  const params = use(paramsPromise); // Unwrap the params promise
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "product" && slug.current == $slug][0]{
            name,
            price,
            originalPrice,
            description,
            images,
            "brandName": brand[0]->name
          }`,
          { slug: params.slug }
        );

        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      product.images && prevIndex < product.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      product.images && prevIndex > 0 ? prevIndex - 1 : product.images.length - 1
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const mainImage = product.images?.[currentIndex]
    ? urlFor(product.images[currentIndex]).url()
    : "/placeholder.jpg";

  return (
    <div className="product-details">
      <div className="product-images">
        <div className="main-image">
          <img src={mainImage} alt="Main product view" />
          <button className="prev-arrow" onClick={handlePrevImage}>
            <CaretLeft size={24} weight="bold" />
          </button>
          <button className="next-arrow" onClick={handleNextImage}>
            <CaretRight size={24} weight="bold" />
          </button>
        </div>
        <div className="image-thumbnails">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={urlFor(image).url()}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">
          {product.originalPrice && (
            <span className="original-price">₦{product.originalPrice}</span>
          )}
          ₦{product.price}
        </p>
        <p className="description">{product.description}</p>
        <p className="brand">Brand: {product.brandName || "Unknown"}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
