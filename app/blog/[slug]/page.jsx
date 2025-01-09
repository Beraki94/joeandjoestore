"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanityImage";
import { PortableText } from "@portabletext/react";
import { use } from "react"; // Import React's use function
import "../blog.css";

const BlogDetailsPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise); // Unwrap the params promise
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "blog" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            shortDescription,
            mainImage{
              asset->{
                url
              },
              altText
            },
            content
          }`,
          { slug: params.slug }
        );
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    if (params.slug) {
      fetchBlogPost();
    }
  }, [params.slug]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details">
      <h1 className="blog-details__title">{blogPost.title}</h1>
      <img
        src={urlFor(blogPost.mainImage).url()}
        alt={blogPost.mainImage.altText}
        className="blog-details__image"
      />
      <div className="blog-details__content">
        <PortableText value={blogPost.content} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
