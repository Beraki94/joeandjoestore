
import BrandCard from "../components/brands/BrandCard";
import "./brandPage.css";

const brands = [
  { id: 1, name: "Gucci", image: "/images/gucci.jpg", link: "/shop/gucci" },
  { id: 2, name: "Louis Vuitton", image: "/images/lv.jpg", link: "/shop/lv" },
  { id: 3, name: "Chanel", image: "/images/chanel.jpg", link: "/shop/chanel" },
  { id: 4, name: "Prada", image: "/images/prada.jpg", link: "/shop/prada" },
  { id: 5, name: "Hermès", image: "/images/hermes.jpg", link: "/shop/hermes" },
  { id: 6, name: "Versace", image: "/images/versace.jpg", link: "/shop/versace" },
  { id: 7, name: "YSL", image: "/images/ysl.jpg", link: "/shop/ysl" },
  { id: 8, name: "Fendi", image: "/images/fendi.jpg", link: "/shop/fendi" },
  { id: 9, name: "Balenciaga", image: "/images/balenciaga.jpg", link: "/shop/balenciaga" },
  { id: 10, name: "Dior", image: "/images/dior.jpg", link: "/shop/dior" },
  { id: 11, name: "Burberry", image: "/images/burberry.jpg", link: "/shop/burberry" },
  { id: 12, name: "Sussen", image: "/images/burberry.jpg", link: "/shop/burberry" },
];

const BrandPage = () => {
  return (
    <div className="brand-page">
      <h1 className="brand-page__title">Explore Our Brands</h1>
      <div className="brand-page__grid">
        {brands.map((brand) => (
          <BrandCard
            key={brand.id}
            name={brand.name}
            image={brand.image}
            link={brand.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
