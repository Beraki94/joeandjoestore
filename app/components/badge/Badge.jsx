"use client";

import React from "react";
import "./Badge.css";

const Badge = () => {
  return (
    <section className="badge">
      <div className="badge__video">
        <h2 className="badge__overlay-text">Who We Are</h2>
      </div>
      <div className="badge__content">
        <p className="badge__sub-title">New products every week</p>
        <h2 className="badge__title">
          We upload new products every week! Don’t forget to check them out.
        </h2>
        <button className="badge__btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Badge;