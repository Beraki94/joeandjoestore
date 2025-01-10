"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../lib/sanity"; // Import getFileUrl
import { getFileUrl } from "../../lib/sanityImage"; // Import getFileUrl
import Link from "next/link";
import "./Hero.css";

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the first hero video document
        const query = `*[_type == "heroVideo"][0]`;
        const data = await client.fetch(query);

        // Check if a video exists and generate the video URL
        if (data?.video?.asset) {
          const videoFileUrl = getFileUrl(data.video.asset);
          setVideoUrl(videoFileUrl); // Set the URL state
        }
      } catch (error) {
        console.error("Error fetching hero video:", error);
      }
    };

    fetchData(); // Run on component mount
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
        poster="path_to_fallback_image.jpg" // Optional fallback image
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      ) : (
        <p>Loading video...</p>
      )}
      <div className="hero__content">
        <h1 className="hero__title">
          New Mandilas Market: Redefining Style with Joe and Joe.
        </h1>
        <Link href="./shop-all">
          <button className="hero__btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
