"use client";

import React from "react";
import { CheckCircle } from "phosphor-react";
import PageHeader from "../components/pageHeader/PageHeader";
import "./about-us.css";


export const aboutData = {
  header: "Empowering Retailers with World-Class Bags",
  companyInfo: {
    description: `
      Joe and Joe Store is your trusted partner in importing and distributing premium-quality bags. 
      With a reputation built on integrity, innovation, and exceptional service, we bring you an 
      exclusive collection from globally renowned brands like Louis Vuitton (LV), Gucci, YSL, and 
      Celine. Whether it’s school bags, handbags, or designer pieces, we’re dedicated to delivering 
      timeless style and unmatched quality to retailers and individuals.
    `,
    whyChooseUs: [
      "Curated Selection: Our products are handpicked to meet diverse tastes and needs.",
      "Customer-Centric Approach: Your satisfaction fuels our passion.",
      "Global Network: Collaborating with top brands ensures the best for you.",
    ],
    journey: `
      Founded in [Year], Joe and Joe Store began with a vision to revolutionize the way retailers 
      access quality bags. What started as a small operation has grown into a leading name in the 
      wholesale bag industry.
    `,
  },
  team: [
    {
      name: "Josephine Emmanuel",
      role: "Founder & Director",
      image: "/josephine.jpg",
    },
    {
      name: "Jonathan Emmanuel",
      role: "Co-Director",
      image: "/jonathan.jpg",
    },
    {
      name: "Sophia Adebayo",
      role: "Operations Manager",
      image: "/sophia.jpg",
    },
    {
      name: "Samuel Johnson",
      role: "Client Relations Manager",
      image: "/samuel.jpg",
    },
  ],
};

const AboutPage = () => {
  const { header, companyInfo, team } = aboutData;

  return (
    <div className="about-page container">
      <PageHeader title={header} />

      {/* About Company Section */}
      <section className="about-company">
        <div className="about-company__content">
          <p className="about-company__description">{companyInfo.description}</p>
          <h3>Why Choose Us?</h3>
          <ul className="about-company__list">
            {companyInfo.whyChooseUs.map((point, index) => (
              <li key={index} className="about-company__list-item">
                <CheckCircle className="about-company__icon" size={20} weight="fill" />
                {point}
              </li>
            ))}
          </ul>
          <h3>Our Journey</h3>
          <p className="about-company__journey">{companyInfo.journey}</p>
        </div>

        {/* Badge for Videos */}
        <div className="about-company__badge">
          <h3>Featured Videos</h3>
          <p>Stay tuned for exclusive behind-the-scenes and product highlights.</p>
          <img src="/placeholder-video-thumbnail.jpg" alt="Video Thumbnail" />
          <button>Watch Now</button>
        </div>
      </section>

      {/* About Team Section */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="about-team__grid">
          {team.map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.image}
                alt={`${member.name} photo`}
                className="team-member__image"
              />
              <h4 className="team-member__name">{member.name}</h4>
              <p className="team-member__role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
