import React from "react";
import { Link } from "react-router-dom";

const categoriesStyles = {
  categoriesSection: {
    padding: "4rem 2rem",
    backgroundColor: "white",
    minHeight: "calc(100vh - 200px)",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "3rem",
    color: "#333",
    fontWeight: "bold",
  },
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  categoryCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    height: "300px",
  },
  categoryCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
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
    padding: "2rem",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    color: "white",
  },
  categoryName: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  categoryDescription: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
    opacity: "0.9",
  },
  productCount: {
    fontSize: "0.9rem",
    opacity: "0.8",
  },
};

const Categories = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const categories = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      count: 120,
      description: "Latest gadgets and tech accessories",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      count: 85,
      description: "Trendy clothing and accessories",
    },
    {
      id: 3,
      name: "Home & Living",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      count: 65,
      description: "Furniture and home decor",
    },
    {
      id: 4,
      name: "Books & Stationery",
      image:
        "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      count: 45,
      description: "Books, notebooks, and writing supplies",
    },
    {
      id: 5,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      count: 60,
      description: "Sports equipment and fitness gear",
    },
    {
      id: 6,
      name: "Beauty & Health",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      count: 75,
      description: "Skincare, makeup, and wellness products",
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
            style={{
              ...categoriesStyles.categoryCard,
              ...(hoveredCard === category.id &&
                categoriesStyles.categoryCardHover),
            }}
            onMouseEnter={() => setHoveredCard(category.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={category.image}
              alt={category.name}
              style={{
                ...categoriesStyles.categoryImage,
                ...(hoveredCard === category.id &&
                  categoriesStyles.categoryImageHover),
              }}
            />
            <div style={categoriesStyles.categoryInfo}>
              <h3 style={categoriesStyles.categoryName}>{category.name}</h3>
              <p style={categoriesStyles.categoryDescription}>
                {category.description}
              </p>
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
