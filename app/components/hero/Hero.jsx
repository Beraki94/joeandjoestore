"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../lib/sanity";
import { getFileUrl } from "../../lib/sanityImage"; // Utility for video URL
import Link from "next/link";
import "./Hero.css";

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const query = `*[_type == "heroVideo"][0]`; // Fetch hero video
        const data = await client.fetch(query);

        if (data?.video?.asset) {
          const videoFileUrl = getFileUrl(data.video.asset);
          setVideoUrl(videoFileUrl);
        }
      } catch (error) {
        console.error("Error fetching hero video:", error);
      }
    };

    fetchHeroVideo();
  }, []);

  return (
    <section className="hero">
      {videoUrl ? (
        <video
          className="hero__video"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          poster="/fallback-image.jpg" // Replace with your fallback image path
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p className="hero__loading">Loading video...</p>
      )}
      <div className="hero__content">
        <h1 className="hero__title">
          New Mandilas Market:<br />Redefining Style<br/>with Joe and Joe Store.
        </h1>
        <Link href="/shop-all" className="hero__btn" aria-label="Shop all products">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
