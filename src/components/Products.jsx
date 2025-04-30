import React, { useState, useEffect } from "react";
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

const API_BASE = "http://localhost:5000/api";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = [
    { id: "all", name: "All" },
    ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
    })),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
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
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={productsStyles.productsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
