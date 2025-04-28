import React from "react";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Newsletter from "./Newsletter";

const homeStyles = {
  featuredProducts: {
    padding: "4rem 2rem",
    backgroundColor: "#f9f9f9",
  },
  featuredProductsHeading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "3rem",
    color: "#333",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  specialOffers: {
    padding: "4rem 2rem",
    backgroundColor: "white",
  },
  specialOffersHeading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "3rem",
    color: "#333",
  },
  offerBanners: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  offerBanner: {
    backgroundColor: "#f9f9f9",
    padding: "2rem",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  offerBannerHover: {
    transform: "translateY(-5px)",
  },
  offerBannerTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#333",
  },
  offerBannerText: {
    color: "#666",
    marginBottom: "1.5rem",
  },
  shopNowButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  shopNowButtonHover: {
    backgroundColor: "#27ae60",
  },
  exploreButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "transparent",
    color: "#333",
    border: "2px solid #333",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  exploreButtonHover: {
    backgroundColor: "#333",
    color: "white",
  },
};

const Home = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      title: "Smartphone X",
      price: 699.99,
      description:
        "Latest smartphone with advanced features and stunning display",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Laptop Pro",
      price: 1299.99,
      description: "High-performance laptop for professionals and creatives",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Wireless Headphones",
      price: 199.99,
      description: "Premium wireless headphones with noise cancellation",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Smart Watch",
      price: 249.99,
      description:
        "Feature-rich smartwatch with health tracking and notifications",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <>
      <HeroSection />
      <Categories />
      <section style={homeStyles.featuredProducts}>
        <h2 style={homeStyles.featuredProductsHeading}>Featured Products</h2>
        <div style={homeStyles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section style={homeStyles.specialOffers}>
        <h2 style={homeStyles.specialOffersHeading}>Special Offers</h2>
        <div style={homeStyles.offerBanners}>
          <div style={homeStyles.offerBanner}>
            <h3 style={homeStyles.offerBannerTitle}>Summer Sale</h3>
            <p style={homeStyles.offerBannerText}>
              Up to 50% off on selected items
            </p>
            <button style={homeStyles.shopNowButton}>Shop Now</button>
          </div>
          <div style={homeStyles.offerBanner}>
            <h3 style={homeStyles.offerBannerTitle}>New Arrivals</h3>
            <p style={homeStyles.offerBannerText}>
              Discover our latest collection
            </p>
            <button style={homeStyles.exploreButton}>Explore</button>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
