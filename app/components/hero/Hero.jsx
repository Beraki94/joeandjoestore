"use client";

import React from "react";
import Link from "next/link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/neeqmandlass.jpg"
        alt="New Mandilas Market"
        className="hero__background"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">
          New Mandilas Market:<br />
          Redefining Style<br />
          with Joe and Joe Store.
        </h1>
        <Link href="/shop-all" className="hero__btn" aria-label="Shop all products">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
