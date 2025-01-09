"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import "../../product/productDetails.css";

const ProductDetails = ({ params: paramsPromise }) => {
  const params = use(paramsPromise); // Unwrap the params promise
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("/placeholder.jpg");

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
          if (data.images?.[0]) {
            setMainImage(urlFor(data.images[0]).url());
          }
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-images">
        <div className="image-thumbnails">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={urlFor(image).url()}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${
                mainImage === urlFor(image).url() ? "active" : ""
              }`}
              onClick={() => setMainImage(urlFor(image).url())}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={mainImage} alt="Main product view" />
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
