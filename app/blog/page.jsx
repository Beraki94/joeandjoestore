"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import BlogCard from "../components/blogCard/BlogCard";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/sanityImage";
import { ArrowLeft, ArrowRight } from "phosphor-react"; // Import Phosphor icons
import "./blog.css";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 99; // Number of posts per page

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"] | order(_createdAt desc) {
          _id,
          title,
          slug,
          shortDescription,
          mainImage
        }`
      )
      .then((data) =>
        setBlogPosts(
          data.map((post) => ({
            ...post,
            imageUrl: urlFor(post.mainImage).url(),
          }))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  // Calculate pagination details
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="blog-page container">
      <PageHeader title="Fashion Blogs" />
      <div className="blog-page__content">
        {currentPosts.map((post) => (
          <BlogCard
            key={post._id}
            id={post._id}
            title={post.title}
            image={post.imageUrl}
            description={post.shortDescription}
            slug={post.slug.current}
          />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <ArrowLeft size={24} />
        </button>
        <div className="pagination-numbers">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`pagination-number ${
                  pageNumber === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
