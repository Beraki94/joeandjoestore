"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import BrandCard from "./BrandCard";
import "swiper/css";
import "swiper/css/navigation";
import "./Brands.css";

const BrandSlider = () => {
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

        setBrands(
          data.map((brand) => ({
            name: brand.name,
            slug: brand.slug.current,
            image: urlFor(brand.primaryLogo).url(),
          }))
        );
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  if (brands.length === 0) {
    return <div>Loading brands...</div>;
  }

  return (
    <div className="brand-slider">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16} // 8-point system
        slidesPerView={5}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="brand-slider__container"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <BrandCard
              name={brand.name}
              image={brand.image}
              link={`/brand/${brand.slug}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
