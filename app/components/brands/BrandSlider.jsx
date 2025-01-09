'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Corrected import for Navigation module
import 'swiper/css';
import 'swiper/css/navigation';
import './Brands.css';

const cardData = [
  { id: 1, brand: 'Bottega Veneta', image: '/path-to-image1.jpg' },
  { id: 2, brand: 'Louis Vuitton', image: '/path-to-image2.jpg' },
  { id: 3, brand: 'Christian Dior', image: '/path-to-image3.jpg' },
  { id: 4, brand: 'Prada', image: '/path-to-image4.jpg' },
  { id: 5, brand: 'Goyard', image: '/path-to-image5.jpg' },
  { id: 6, brand: 'Bottega Veneta', image: '/path-to-image1.jpg' },
  { id: 7, brand: 'Louis Vuitton', image: '/path-to-image2.jpg' },
  { id: 8, brand: 'Christian Dior', image: '/path-to-image3.jpg' },
  { id: 9, brand: 'Prada', image: '/path-to-image4.jpg' },
  { id: 10, brand: 'Goyard', image: '/path-to-image5.jpg' },
];

const BrandSlider = () => {
  return (
    <div className="brand-slider">
      <Swiper
        modules={[Navigation]} // Updated Swiper modules configuration
        navigation
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="swiper-container"
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="swiper-card">
              <img
                src={card.image}
                alt={card.brand}
                className="swiper-image"
              />
              <h3 className="swiper-title">{card.brand}</h3>
              <button className="swiper-button">Shop now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
