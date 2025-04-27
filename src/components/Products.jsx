import React, { useState } from "react";
import ProductCard from "./ProductCard";

const productsStyles = {
  productsContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
  filters: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
  },
  filterButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  filterButtonActive: {
    backgroundColor: "#2ecc71",
    color: "white",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
  },
  searchBar: {
    padding: "0.8rem 1rem",
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
  },
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample products data
  const products = [
    {
      id: 1,
      title: "Smartphone X",
      price: 699.99,
      description: "Latest smartphone with advanced features",
      image: "https://via.placeholder.com/300",
      category: "electronics",
    },
    {
      id: 2,
      title: "Laptop Pro",
      price: 1299.99,
      description: "High-performance laptop for professionals",
      image: "https://via.placeholder.com/300",
      category: "electronics",
    },
    {
      id: 3,
      title: "Wireless Headphones",
      price: 199.99,
      description: "Premium wireless headphones with noise cancellation",
      image: "https://via.placeholder.com/300",
      category: "electronics",
    },
    {
      id: 4,
      title: "Smart Watch",
      price: 249.99,
      description: "Feature-rich smartwatch with health tracking",
      image: "https://via.placeholder.com/300",
      category: "electronics",
    },
    {
      id: 5,
      title: "Men's Casual Shirt",
      price: 49.99,
      description: "Comfortable and stylish casual shirt",
      image: "https://via.placeholder.com/300",
      category: "clothing",
    },
    {
      id: 6,
      title: "Women's Dress",
      price: 79.99,
      description: "Elegant dress for special occasions",
      image: "https://via.placeholder.com/300",
      category: "clothing",
    },
  ];

  const categories = ["all", "electronics", "clothing", "home", "books"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={productsStyles.productsContainer}>
      <div style={productsStyles.header}>
        <h1 style={productsStyles.title}>Our Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={productsStyles.searchBar}
        />
      </div>
      <div style={productsStyles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              ...productsStyles.filterButton,
              ...(selectedCategory === category &&
                productsStyles.filterButtonActive),
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div style={productsStyles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
