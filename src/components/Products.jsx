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
      id: 101,
      title: "Smartphone X Pro",
      price: 49999.99,
      description:
        "Latest smartphone with 5G support and advanced camera system",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics",
    },
    {
      id: 102,
      title: "Wireless Earbuds",
      price: 7999.99,
      description: "Premium wireless earbuds with active noise cancellation",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics",
    },
    {
      id: 201,
      title: "Men's Casual Shirt",
      price: 1999.99,
      description: "Premium cotton casual shirt for men",
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "fashion",
    },
    {
      id: 202,
      title: "Women's Summer Dress",
      price: 2999.99,
      description: "Elegant summer dress for women",
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "fashion",
    },
    {
      id: 301,
      title: "Modern Sofa Set",
      price: 29999.99,
      description: "Contemporary 3-seater sofa set",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "home",
    },
    {
      id: 401,
      title: "Premium Notebook Set",
      price: 999.99,
      description: "Set of 3 premium quality notebooks",
      image:
        "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "books",
    },
    {
      id: 501,
      title: "Running Shoes",
      price: 4999.99,
      description: "Premium running shoes with advanced cushioning",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "sports",
    },
    {
      id: 601,
      title: "Skincare Set",
      price: 2999.99,
      description: "Complete skincare routine set for glowing skin",
      image:
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/2c/b1/ae/01/80/v1_E10/E106C82Z.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=de8fc69217df0aa28c6d5a4899e4a4fb65fe6a5d94f97dee7ebdd02562cc9844",
      category: "beauty",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "home", name: "Home & Living" },
    { id: "books", name: "Books & Stationery" },
    { id: "sports", name: "Sports" },
    { id: "beauty", name: "Beauty & Health" },
  ];

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
            key={category.id}
            style={{
              ...productsStyles.filterButton,
              ...(selectedCategory === category.id &&
                productsStyles.filterButtonActive),
            }}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
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
