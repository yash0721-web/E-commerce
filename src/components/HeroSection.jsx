import React from "react";
import { Link } from "react-router-dom";

const heroStyles = {
  heroSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    padding: "6rem 2rem",
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    minHeight: "80vh",
    position: "relative",
    overflow: "hidden",
  },
  heroContent: {
    maxWidth: "600px",
    position: "relative",
    zIndex: 2,
  },
  heroHeading: {
    fontSize: "4rem",
    marginBottom: "1.5rem",
    color: "#2c3e50",
    lineHeight: "1.2",
    fontWeight: "800",
  },
  heroText: {
    fontSize: "1.25rem",
    color: "#34495e",
    marginBottom: "2.5rem",
    lineHeight: "1.6",
  },
  heroButtons: {
    display: "flex",
    gap: "1.5rem",
  },
  primaryButton: {
    padding: "1rem 2.5rem",
    backgroundColor: "#2ecc71",
    color: "white",
    textDecoration: "none",
    borderRadius: "50px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(46, 204, 113, 0.3)",
  },
  primaryButtonHover: {
    backgroundColor: "#27ae60",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(46, 204, 113, 0.4)",
  },
  secondaryButton: {
    padding: "1rem 2.5rem",
    backgroundColor: "transparent",
    color: "#2c3e50",
    textDecoration: "none",
    borderRadius: "50px",
    border: "2px solid #2c3e50",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  secondaryButtonHover: {
    backgroundColor: "#2c3e50",
    color: "white",
    transform: "translateY(-2px)",
  },
  heroImage: {
    width: "100%",
    maxHeight: "600px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transform: "perspective(1000px) rotateY(-10deg)",
    transition: "transform 0.3s ease",
  },
  heroImageHover: {
    transform: "perspective(1000px) rotateY(0deg)",
  },
  decorativeElement: {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "400px",
    height: "400px",
    backgroundColor: "rgba(46, 204, 113, 0.1)",
    borderRadius: "50%",
    zIndex: 1,
  },
  "@media (max-width: 768px)": {
    heroSection: {
      gridTemplateColumns: "1fr",
      textAlign: "center",
      padding: "4rem 1rem",
      minHeight: "auto",
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
    heroImage: {
      marginTop: "2rem",
      transform: "none",
    },
  },
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section style={heroStyles.heroSection}>
      <div style={heroStyles.decorativeElement} />
      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.heroHeading}>
          Discover Amazing Products at Unbeatable Prices
        </h1>
        <p style={heroStyles.heroText}>
          Shop with confidence and enjoy a seamless shopping experience. Find
          the best deals on electronics, fashion, home goods, and more.
        </p>
        <div style={heroStyles.heroButtons}>
          <Link
            to="/products"
            style={heroStyles.primaryButton}
            onMouseEnter={(e) =>
              (e.target.style = {
                ...heroStyles.primaryButton,
                ...heroStyles.primaryButtonHover,
              })
            }
            onMouseLeave={(e) => (e.target.style = heroStyles.primaryButton)}
          >
            Shop Now
          </Link>
          <Link
            to="/categories"
            style={heroStyles.secondaryButton}
            onMouseEnter={(e) =>
              (e.target.style = {
                ...heroStyles.secondaryButton,
                ...heroStyles.secondaryButtonHover,
              })
            }
            onMouseLeave={(e) => (e.target.style = heroStyles.secondaryButton)}
          >
            Explore Categories
          </Link>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Hero Banner"
          style={{
            ...heroStyles.heroImage,
            ...(isHovered && heroStyles.heroImageHover),
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
