import React from "react";
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
        bio: "With over 15 years of experience in fashion retail, Josephine is the heart of Joe and Joe Store. Her passion for blending style with functionality has driven the company's innovation and success.",
        image: "/josephine.jpg",
      },
      {
        name: "Jonathan Emmanuel",
        role: "Co-Director",
        bio: "Jonathan’s expertise in logistics and business strategy ensures smooth operations and sustainable growth. His focus on efficiency guarantees timely delivery and customer satisfaction.",
        image: "/jonathan.jpg",
      },
      {
        name: "Sophia Adebayo",
        role: "Operations Manager",
        bio: "Sophia oversees daily activities and supplier relations, ensuring that every process aligns with our high standards.",
        image: "/sophia.jpg",
      },
      {
        name: "Samuel Johnson",
        role: "Client Relations Manager",
        bio: "Samuel’s dedication to building strong client connections is integral to our growing customer loyalty.",
        image: "/samuel.jpg",
      },
    ],
  };
  

const AboutPage = () => {
  const { header, companyInfo, team } = aboutData;

  return (
    <div className="about-page">
        <PageHeader />
      <header className="about-header">
        <h1>{header}</h1>
      </header>

      <section className="about-company">
        <p>{companyInfo.description}</p>
        <h3>Why Choose Us?</h3>
        <ul>
          {companyInfo.whyChooseUs.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <h3>Our Journey</h3>
        <p>{companyInfo.journey}</p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
