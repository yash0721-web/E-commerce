import React from "react";

const aboutStyles = {
  aboutContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  heroSection: {
    textAlign: "center",
    padding: "4rem 2rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "4rem",
  },
  heroTitle: {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "1rem",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "800px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "4rem",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "2rem",
  },
  sectionContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    alignItems: "center",
  },
  sectionText: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#666",
  },
  sectionImage: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  teamMember: {
    textAlign: "center",
  },
  memberImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "1rem",
    objectFit: "cover",
  },
  memberName: {
    fontSize: "1.3rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  memberRole: {
    fontSize: "1rem",
    color: "#666",
  },
  valuesList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  valueCard: {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    textAlign: "center",
  },
  valueTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "1rem",
  },
  valueDescription: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
  },
};

const About = () => {
  return (
    <div style={aboutStyles.aboutContainer}>
      <section style={aboutStyles.heroSection}>
        <h1 style={aboutStyles.heroTitle}>About E-Shop</h1>
        <p style={aboutStyles.heroSubtitle}>
          We are dedicated to providing high-quality products and exceptional
          customer service to our valued customers.
        </p>
      </section>

      <section style={aboutStyles.section}>
        <h2 style={aboutStyles.sectionTitle}>Our Story</h2>
        <div style={aboutStyles.sectionContent}>
          <div style={aboutStyles.sectionText}>
            <p>
              Founded in 2020, E-Shop started as a small online store with a big
              vision. Our mission was to create a seamless shopping experience
              for customers while offering the best products at competitive
              prices.
            </p>
            <p>
              Over the years, we've grown into a trusted e-commerce platform,
              serving thousands of satisfied customers worldwide. Our commitment
              to quality and customer satisfaction remains at the heart of
              everything we do.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Our Story"
            style={aboutStyles.sectionImage}
          />
        </div>
      </section>

      <section style={aboutStyles.section}>
        <h2 style={aboutStyles.sectionTitle}>Our Team</h2>
        <div style={aboutStyles.teamGrid}>
          <div style={aboutStyles.teamMember}>
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 1"
              style={aboutStyles.memberImage}
            />
            <h3 style={aboutStyles.memberName}>John Doe</h3>
            <p style={aboutStyles.memberRole}>CEO & Founder</p>
          </div>
          <div style={aboutStyles.teamMember}>
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 2"
              style={aboutStyles.memberImage}
            />
            <h3 style={aboutStyles.memberName}>Jane Smith</h3>
            <p style={aboutStyles.memberRole}>Head of Operations</p>
          </div>
          <div style={aboutStyles.teamMember}>
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 3"
              style={aboutStyles.memberImage}
            />
            <h3 style={aboutStyles.memberName}>Mike Johnson</h3>
            <p style={aboutStyles.memberRole}>Customer Experience Manager</p>
          </div>
        </div>
      </section>

      <section style={aboutStyles.section}>
        <h2 style={aboutStyles.sectionTitle}>Our Values</h2>
        <div style={aboutStyles.valuesList}>
          <div style={aboutStyles.valueCard}>
            <h3 style={aboutStyles.valueTitle}>Quality</h3>
            <p style={aboutStyles.valueDescription}>
              We are committed to offering only the highest quality products,
              carefully selected and tested to meet our standards.
            </p>
          </div>
          <div style={aboutStyles.valueCard}>
            <h3 style={aboutStyles.valueTitle}>Customer Focus</h3>
            <p style={aboutStyles.valueDescription}>
              Our customers are at the center of everything we do. We strive to
              provide exceptional service and support at every step.
            </p>
          </div>
          <div style={aboutStyles.valueCard}>
            <h3 style={aboutStyles.valueTitle}>Innovation</h3>
            <p style={aboutStyles.valueDescription}>
              We continuously improve our platform and services to provide the
              best possible shopping experience for our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
