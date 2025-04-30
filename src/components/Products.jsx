import React, { useState } from "react";
import ProductCard from "./ProductCard";

const productsStyles = {
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
  filterBar: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
    justifyContent: "center",
  },
  filterButton: {
    padding: "0.5rem 1.2rem",
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.2s",
  },
  filterButtonActive: {
    backgroundColor: "#2ecc71",
    color: "white",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
};

const featuredProducts = [
  {
    id: 1,
    title: "Smartphone X",
    price: 699.99,
    description:
      "Latest smartphone with advanced features and stunning display",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Laptop Pro",
    price: 1299.99,
    description: "High-performance laptop for professionals and creatives",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 199.99,
    description: "Premium wireless headphones with noise cancellation",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 249.99,
    description:
      "Feature-rich smartwatch with health tracking and notifications",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Premium Notebook Set",
    price: 99.99,
    description: "Set of 3 premium quality notebooks",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Books & Stationery",
  },
  {
    id: 6,
    title: "Women's Summer Dress",
    price: 899.99,
    description: "Elegant summer dress for women",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
  },
  {
    id: 7,
    title: "Sofa Set",
    price: 499.99,
    description: "Sofa Set for living room",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home & Living",
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from products
  const uniqueCategories = [
    "All",
    ...Array.from(
      new Set(featuredProducts.map((p) => p.category).filter(Boolean))
    ),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === selectedCategory);

  return (
    <section style={productsStyles.featuredProducts}>
      <h2 style={productsStyles.featuredProductsHeading}>Featured Products</h2>
      <div style={productsStyles.filterBar}>
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            style={{
              ...productsStyles.filterButton,
              ...(selectedCategory === cat &&
                productsStyles.filterButtonActive),
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={productsStyles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
