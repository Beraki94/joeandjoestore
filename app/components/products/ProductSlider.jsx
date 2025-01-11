"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import SectionHeader from "../sectionHeader/SectionHeader"
import ProductCard from "../products/ProductCard";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "./Products.css";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const threeWeeksAgo = new Date();
    threeWeeksAgo.setDate(threeWeeksAgo.getDate() - 21);

    client
      .fetch(
        `*[_type == "product" && _createdAt > $threeWeeksAgo] | order(_createdAt desc) {
          _id,
          name,
          price,
          originalPrice,
          images[0],
          "brand": brand[0]->name,
          slug
        }`,
        { threeWeeksAgo: threeWeeksAgo.toISOString() }
      )
      .then((data) => {
        setProducts(
          data.map((product) => ({
            ...product,
            image: product.images ? urlFor(product.images).url() : "/placeholder.jpg",
          }))
        );
      })
      .catch(console.error);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="product-slider">
      <div className="product-slider__title">
      <SectionHeader
        title="Exclusive Market Picks"
        subtitle="Check out our unique designs"
        align="center"
      />
      <Link href="./shop-all" className="product-slider__link">See All</Link>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="swiper-container"
      >
        {products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard
                image={product.image}
                title={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                brand={product.brand}
                slug={product.slug?.current}
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="no-products">No recent products found.</p>
        )}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
