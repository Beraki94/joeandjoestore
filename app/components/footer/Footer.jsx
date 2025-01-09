"use client"
import "./Footer.css"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstagramLogo, YoutubeLogo, TiktokLogo, TwitterLogo, WhatsappLogo, MapPin, EnvelopeSimple, Phone } from "phosphor-react";

const Footer = () => {
  const pathName = usePathname();

  // Useful Links
  const links = [
    { name: "Shop All", href: "/shop-all" },
    { name: "About Us", href: "/about-us" },
    { name: "Brands", href: "/brands" },
    { name: "Blog", href: "/blog" },
    { name: "Delivery", href: "/delivery" },
    { name: "Return Policy", href: "/return-policy" },
  ];

  // Categories
  const categories = [
    { name: "Leather Bags", href: "/categories/leather-bags" },
    { name: "Canvas Bags", href: "/categories/canvas-bags" },
    { name: "Eco-Friendly Bags", href: "/categories/eco-friendly-bags" },
    { name: "Travel Bags", href: "/categories/travel-bags" },
    { name: "Backpacks", href: "/categories/backpacks" },
    { name: "Handbags", href: "/categories/handbags" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Logo and About Section */}
        <div className="footer__about">
          <h1 className="footer__logo">Joe and Joe</h1>
          <p className="footer__description">
            Joe and Joe is your trusted wholesale partner for high-quality bags. We specialize in offering a wide range of leather, canvas, and eco-friendly bags at wholesale prices.
          </p>
          <div className="footer__social">
            <Link href="https://instagram.com" target="_blank" className="footer__social-link">
              <InstagramLogo size={32} />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="footer__social-link">
              <YoutubeLogo size={32} />
            </Link>
            <Link href="https://tiktok.com" target="_blank" className="footer__social-link">
              <TiktokLogo size={32} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="footer__social-link">
              <TwitterLogo size={32} />
            </Link>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer__links">
          <h4 className="footer__heading">Useful Links</h4>
          <ul>
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className={`footer__link ${pathName === link.href ? "footer__link--active" : ""}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="footer__categories">
          <h4 className="footer__heading">Categories</h4>
          <ul>
            {categories.map((category, idx) => (
              <li key={idx}>
                <Link href={category.href} className={`footer__link ${pathName === category.href ? "footer__link--active" : ""}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer__contact">
          <h4 className="footer__heading">Contact Us</h4>
          <p className="footer__address">
            <MapPin size={32} /> Vespainternational Market, Lagos, Nigeria
          </p>
          <p className="footer__address">
            <MapPin size={32} /> Mandilas International Market, Lagos, Nigeria
          </p>
          <p className="footer__phone">
            <Phone size={32} /> +234 801 234 5678
          </p>
          <p className="footer__phone">
            <EnvelopeSimple size={32} /> info@joeandjoestore.ng
          </p>
          <Link href="https://wa.me/2348012345678" target="_blank" className="btn footer__whatsapp">
            <WhatsappLogo size={32} /> Chat on WhatsApp
          </Link>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer__bottom text-center mt-3">
          <p className="footer__text">© 2024 Joe and Joe Bags. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
