"use client";

import Link from "next/link";
import "./Header.css";
import { ShoppingCart, MagnifyingGlass } from "phosphor-react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop All", href: "/shop-all" },
  { name: "Brands", href: "/brand" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="header">
      <div className="header__badge">1-3 Days delivery</div>
      <div className="header__container">
        {/* Logo Section */}
        <Link href="/" className="header__logo">
          Joe and Joe
        </Link>

        {/* Navigation Links */}
        <nav className="header__nav">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`header__nav-link ${
                pathName === link.href ? "header__nav-link--active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Section */}
        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="Search for products..."
            aria-label="Search"
          />
          <button className="header__search-btn" aria-label="Search Button">
            <MagnifyingGlass size={24} />
          </button>
        </div>

        {/* Cart Icon */}
        <button className="header__icon-btn" aria-label="Cart Button">
          <ShoppingCart size={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
