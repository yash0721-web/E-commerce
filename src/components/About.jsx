import React from "react";

const aboutStyles = {
  aboutContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2ecc71",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  journeySection: {
    marginTop: "4rem",
    backgroundColor: "white",
    padding: "4rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  journeyTitle: {
    fontSize: "2rem",
    color: "#2ecc71",
    marginBottom: "2rem",
    textAlign: "center",
    fontWeight: "bold",
  },
  journeyContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  journeyCard: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderTop: "4px solid #2ecc71",
    transition: "transform 0.3s ease",
  },
  journeyCardHover: {
    transform: "translateY(-5px)",
  },
  journeyCardTitle: {
    fontSize: "1.5rem",
    color: "#2ecc71",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  journeyCardText: {
    color: "#666",
    lineHeight: "1.6",
  },
  achievementsSection: {
    marginTop: "4rem",
    backgroundColor: "white",
    padding: "4rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  achievementsTitle: {
    fontSize: "2rem",
    color: "#2ecc71",
    marginBottom: "2rem",
    textAlign: "center",
    fontWeight: "bold",
  },
  achievementsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  achievementCard: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    borderTop: "4px solid #2ecc71",
    transition: "transform 0.3s ease",
  },
  achievementCardHover: {
    transform: "translateY(-5px)",
  },
  achievementNumber: {
    fontSize: "2.5rem",
    color: "#2ecc71",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  achievementText: {
    fontSize: "1.1rem",
    color: "#333",
    fontWeight: "500",
  },
};

const About = () => {
  return (
    <div style={aboutStyles.aboutContainer}>
      <div style={aboutStyles.header}>
        <h1 style={aboutStyles.title}>About E-Shop</h1>
        <p style={aboutStyles.subtitle}>
          Founded in 2017, E-Shop has grown to become one of India's leading
          e-commerce platforms. We are committed to providing quality products
          and exceptional service to customers across the country.
        </p>
      </div>

      <div style={aboutStyles.journeySection}>
        <h2 style={aboutStyles.journeyTitle}>Our Journey</h2>
        <div style={aboutStyles.journeyContent}>
          <div style={aboutStyles.journeyCard}>
            <h3 style={aboutStyles.journeyCardTitle}>Humble Beginnings</h3>
            <p style={aboutStyles.journeyCardText}>
              Starting from a small office in Pune, E-Shop began its journey
              with a vision to revolutionize online shopping in India. Our first
              warehouse was just 1000 square feet, but our dreams were as vast
              as the Indian market itself.
            </p>
          </div>
          <div style={aboutStyles.journeyCard}>
            <h3 style={aboutStyles.journeyCardTitle}>Digital Revolution</h3>
            <p style={aboutStyles.journeyCardText}>
              As India embraced digital transformation, we expanded our
              operations across major cities. Today, we serve customers in over
              20,000 pin codes across India, making quality products accessible
              to every corner of the country.
            </p>
          </div>
          <div style={aboutStyles.journeyCard}>
            <h3 style={aboutStyles.journeyCardTitle}>Future Vision</h3>
            <p style={aboutStyles.journeyCardText}>
              Looking ahead, we aim to empower small businesses and local
              artisans by providing them a platform to reach customers
              nationwide. Our focus remains on innovation, customer
              satisfaction, and contributing to India's growing digital economy.
            </p>
          </div>
        </div>
      </div>

      <div style={aboutStyles.achievementsSection}>
        <h2 style={aboutStyles.achievementsTitle}>Our Achievements</h2>
        <div style={aboutStyles.achievementsGrid}>
          <div style={aboutStyles.achievementCard}>
            <div style={aboutStyles.achievementNumber}>100k+</div>
            <div style={aboutStyles.achievementText}>Happy Customers</div>
          </div>
          <div style={aboutStyles.achievementCard}>
            <div style={aboutStyles.achievementNumber}>50K+</div>
            <div style={aboutStyles.achievementText}>Products Available</div>
          </div>
          <div style={aboutStyles.achievementCard}>
            <div style={aboutStyles.achievementNumber}>100+</div>
            <div style={aboutStyles.achievementText}>Cities Served</div>
          </div>
          <div style={aboutStyles.achievementCard}>
            <div style={aboutStyles.achievementNumber}>24/7</div>
            <div style={aboutStyles.achievementText}>Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
