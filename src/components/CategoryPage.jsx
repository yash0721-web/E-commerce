import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const categoryPageStyles = {
  container: {
    padding: "4rem 2rem",
    backgroundColor: "#f8f9fa",
    minHeight: "calc(100vh - 200px)",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    color: "#34495e",
    maxWidth: "800px",
    margin: "0 auto",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
};

// Sample products for each category
const categoryProducts = {
  1: [
    // Electronics
    {
      id: 101,
      title: "Smartphone X Pro",
      price: 49999.99,
      description:
        "Latest smartphone with 5G support and advanced camera system",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 102,
      title: "Wireless Earbuds",
      price: 7999.99,
      description: "Premium wireless earbuds with active noise cancellation",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 103,
      title: "Smart Watch 2",
      price: 14999.99,
      description: "Feature-rich smartwatch with health monitoring",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
  2: [
    // Fashion
    {
      id: 201,
      title: "Men's Casual Shirt",
      price: 1999.99,
      description: "Premium cotton casual shirt for men",
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 202,
      title: "Women's Summer Dress",
      price: 2999.99,
      description: "Elegant summer dress for women",
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 203,
      title: "Designer Handbag",
      price: 8999.99,
      description: "Luxury designer handbag for women",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
  3: [
    // Home & Living
    {
      id: 301,
      title: "Modern Sofa Set",
      price: 29999.99,
      description: "Contemporary 3-seater sofa set",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 302,
      title: "Dining Table Set",
      price: 24999.99,
      description: "6-seater wooden dining table set",
      image:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 303,
      title: "Bedroom Set",
      price: 39999.99,
      description: "Complete bedroom furniture set",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
  4: [
    // Books & Stationery
    {
      id: 401,
      title: "Premium Notebook Set",
      price: 999.99,
      description: "Set of 3 premium quality notebooks",
      image:
        "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 402,
      title: "Fountain Pen Set",
      price: 2999.99,
      description: "Luxury fountain pen set with ink",
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 403,
      title: "Book Collection",
      price: 4999.99,
      description: "Collection of best-selling novels",
      image:
        "https://images.unsplash.com/photo-1549967414-7c0b1c0b0b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
  5: [
    // Sports
    {
      id: 501,
      title: "Running Shoes",
      price: 4999.99,
      description: "Premium running shoes with advanced cushioning",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 502,
      title: "Yoga Mat",
      price: 1499.99,
      description: "Non-slip premium yoga mat with carrying strap",
      image:
        "https://images.unsplash.com/photo-1591291621060-89264efbeaed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvZ2ElMjBtYXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 503,
      title: "Dumbbell Set",
      price: 2999.99,
      description: "Adjustable dumbbell set for home workouts",
      image:
        "https://plus.unsplash.com/premium_photo-1726812052281-2baeb2546628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1bWJsZSUyMHNldCUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 504,
      title: "Sports Bag",
      price: 1999.99,
      description: "Spacious sports bag with multiple compartments",
      image:
        "https://images.unsplash.com/photo-1692506530242-c12d6c3ae2e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBiYWd8ZW58MHx8MHx8fDA%3D",
    },
  ],
  6: [
    // Beauty & Health
    {
      id: 601,
      title: "Skincare Set",
      price: 2999.99,
      description: "Complete skincare routine set for glowing skin",
      image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/2c/b1/ae/01/80/v1_E10/E106C82Z.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=de8fc69217df0aa28c6d5a4899e4a4fb65fe6a5d94f97dee7ebdd02562cc9844",
    },
    {
      id: 602,
      title: "Makeup Kit",
      price: 3999.99,
      description: "Professional makeup kit with all essentials",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 603,
      title: "Hair Care Bundle",
      price: 2499.99,
      description: "Premium hair care products for all hair types",
      image:
       "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/22/26/87/61/13/v1_E10/E106BV4Y.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=9a8dcdeb3ccda1c082248d495fd763165218e07df8676baa7272861ffe3cff40",
    },
    {
      id: 604,
      title: "Fragrance Set",
      price: 5999.99,
      description: "Luxury fragrance collection for men and women",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ],
};

const categoryDetails = {
  1: {
    name: "Electronics",
    description:
      "Discover the latest in technology with our premium electronics collection.",
  },
  2: {
    name: "Fashion",
    description: "Explore our trendy fashion collection for men and women.",
  },
  3: {
    name: "Home & Living",
    description:
      "Transform your living space with our stylish home decor and furniture.",
  },
  4: {
    name: "Books & Stationery",
    description: "Find your next read and premium stationery items.",
  },
  5: {
    name: "Sports",
    description: "Get active with our premium sports and fitness equipment.",
  },
  6: {
    name: "Beauty & Health",
    description:
      "Discover premium beauty and health products for your self-care routine.",
  },
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const products = categoryProducts[categoryId] || [];
  const category = categoryDetails[categoryId] || {
    name: "Category",
    description: "",
  };

  return (
    <div style={categoryPageStyles.container}>
      <div style={categoryPageStyles.header}>
        <h1 style={categoryPageStyles.title}>{category.name}</h1>
        <p style={categoryPageStyles.description}>{category.description}</p>
      </div>
      <div style={categoryPageStyles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
