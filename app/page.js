import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import BrandSlider from "./components/brands/BrandSlider";
import Badge from "./components/badge/Badge";
import CategorySection from "./components/categorySection/CategorySection";
import ProductSlider from "./components/products/ProductSlider";



export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
      <Hero />
      <Features />
      <BrandSlider />
      <ProductSlider />
      <Badge />
      <CategorySection />
      </div>
    </div>
  );
}

