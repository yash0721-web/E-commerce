import React from "react";
import { Link } from "react-router-dom";

const categoriesStyles = {
  categoriesSection: {
    padding: "4rem 2rem",
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "3rem",
    color: "#333",
  },
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  categoryCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  categoryCardHover: {
    transform: "translateY(-5px)",
  },
  categoryImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  categoryImageHover: {
    transform: "scale(1.05)",
  },
  categoryInfo: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "1.5rem",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    color: "white",
  },
  categoryName: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  productCount: {
    fontSize: "0.9rem",
    opacity: "0.8",
  },
};

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://via.placeholder.com/300x200",
      count: 120,
    },
    {
      id: 2,
      name: "Clothing",
      image: "https://via.placeholder.com/300x200",
      count: 85,
    },
    {
      id: 3,
      name: "Home & Kitchen",
      image: "https://via.placeholder.com/300x200",
      count: 65,
    },
    {
      id: 4,
      name: "Books",
      image: "https://via.placeholder.com/300x200",
      count: 45,
    },
  ];

  return (
    <section style={categoriesStyles.categoriesSection}>
      <h2 style={categoriesStyles.heading}>Shop by Category</h2>
      <div style={categoriesStyles.categoriesGrid}>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            style={categoriesStyles.categoryCard}
          >
            <img
              src={category.image}
              alt={category.name}
              style={categoriesStyles.categoryImage}
            />
            <div style={categoriesStyles.categoryInfo}>
              <h3 style={categoriesStyles.categoryName}>{category.name}</h3>
              <p style={categoriesStyles.productCount}>
                {category.count} products
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
