"use client";

import { Truck, LockSimple, Sparkle } from "phosphor-react";
import "./Features.css";

const features = [
  {
    id: 1,
    title: "1-3 days delivery",
    description: "Joe and Joe offers fast and reliable delivery in just 1-3 days.",
    icon: Truck,
  },
  {
    id: 2,
    title: "100% authentic products",
    description: "At Joe and Joe, you always get a unique guarantee of authenticity with every product.",
    icon: LockSimple,
  },
  {
    id: 3,
    title: "Largest selection in the market",
    description: "We pride ourselves on having the best selection of bags in the wholesale market.",
    icon: Sparkle,
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features__container container">
        {features.map((feature) => (
          <div key={feature.id} className="features__item">
            {/* Icon */}
            <feature.icon size={32} color="var(--primary-color)" className="features__icon" />
            
            {/* Title */}
            <h3 className="features__title">{feature.title}</h3>

            {/* Description */}
            <p className="features__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
