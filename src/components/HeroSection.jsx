import React from "react";
import { Link } from "react-router-dom";

const heroStyles = {
  heroSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    padding: "4rem 2rem",
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  heroContent: {
    maxWidth: "500px",
  },
  heroHeading: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    color: "#333",
    lineHeight: "1.2",
  },
  heroText: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },
  heroButtons: {
    display: "flex",
    gap: "1rem",
  },
  primaryButton: {
    padding: "1rem 2rem",
    backgroundColor: "#2ecc71",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  primaryButtonHover: {
    backgroundColor: "#27ae60",
  },
  secondaryButton: {
    padding: "1rem 2rem",
    backgroundColor: "transparent",
    color: "#333",
    textDecoration: "none",
    borderRadius: "4px",
    border: "2px solid #333",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  secondaryButtonHover: {
    backgroundColor: "#333",
    color: "white",
  },
  heroImage: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  "@media (max-width: 768px)": {
    heroSection: {
      gridTemplateColumns: "1fr",
      textAlign: "center",
      padding: "2rem 1rem",
    },
    heroContent: {
      maxWidth: "100%",
    },
    heroHeading: {
      fontSize: "2.5rem",
    },
    heroButtons: {
      justifyContent: "center",
    },
  },
};

const HeroSection = () => {
  return (
    <section style={heroStyles.heroSection}>
      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroHeading}>Welcome to E-Shop</h1>
        <p style={heroStyles.heroText}>
          Discover amazing products at unbeatable prices. Shop with confidence
          and enjoy a seamless shopping experience.
        </p>
        <div style={heroStyles.heroButtons}>
          <Link to="/products" style={heroStyles.primaryButton}>
            Shop Now
          </Link>
          <Link to="/categories" style={heroStyles.secondaryButton}>
            Explore Categories
          </Link>
        </div>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Hero Banner"
          style={heroStyles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
