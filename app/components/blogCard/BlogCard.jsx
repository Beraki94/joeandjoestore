import React from "react";
import Link from "next/link";

const BlogCard = ({ id, title, image, description, slug }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card__image" />
      <h3 className="blog-card__title">{title}</h3>
      <p className="blog-card__description">{description}</p>
      <Link href={`/blog/${slug}`}>
        <button className="blog-card__button">Read More</button>
      </Link>
    </div>
  );
};

export default BlogCard;
