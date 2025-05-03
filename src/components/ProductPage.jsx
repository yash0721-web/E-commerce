import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Import the categoryProducts object from CategoryPage
import { categoryProducts } from "./CategoryPage";
import { categories } from "./Categories";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Find the product by id from all categories
  let product = null;
  let categoryId = null;
  for (const [catId, products] of Object.entries(categoryProducts)) {
    const found = products.find((p) => String(p.id) === String(id));
    if (found) {
      product = found;
      categoryId = catId;
      break;
    }
  }

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: 4,
            border: "1px solid #ddd",
            background: "#f8f9fa",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      minHeight: "calc(100vh - 200px)",
    },
    productContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem",
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
      },
    },
    card: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "400px",
      overflow: "hidden",
    },
    productImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    categoryImage: {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "2px solid white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      zIndex: 1,
    },
    infoContainer: {
      padding: "2rem",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,1))",
    },
    productName: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#333",
    },
    categoryName: {
      fontSize: "1.2rem",
      color: "#666",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    productPrice: {
      fontSize: "1.8rem",
      color: "#2ecc71",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    productDescription: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      color: "#666",
      marginBottom: "1.5rem",
      flex: 1,
    },
    quantityContainer: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    quantityButton: {
      padding: "0.5rem 1rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: "white",
      cursor: "pointer",
      fontSize: "1.2rem",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    },
    quantityInput: {
      width: "50px",
      textAlign: "center",
      padding: "0.5rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    addToCartButton: {
      width: "100%",
      padding: "1rem",
      backgroundColor: "#2ecc71",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#27ae60",
        transform: "translateY(-2px)",
      },
    },
    backButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.8rem 1.5rem",
      backgroundColor: "#f8f9fa",
      color: "#333",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginBottom: "1.5rem",
      cursor: "pointer",
      textDecoration: "none",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#e9ecef",
      },
    },
    relatedProducts: {
      marginTop: "3rem",
    },
    relatedProductsTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#333",
    },
    relatedProductsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "1.5rem",
    },
  };

  // Get related products from the same category
  const relatedProducts = categoryId
    ? categoryProducts[categoryId]
        .filter((p) => p.id !== product.id)
        .slice(0, 4)
    : [];

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>
        ← Back to Categories
      </button>
      <div style={styles.productContainer}>
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.title}
              style={styles.productImage}
            />
          </div>
          <div style={styles.infoContainer}>
            <h1 style={styles.productName}>{product.title}</h1>
            <div style={styles.productPrice}>₹{product.price.toFixed(2)}</div>
            <p style={styles.productDescription}>{product.description}</p>
            <div style={styles.quantityContainer}>
              <button
                style={styles.quantityButton}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                style={styles.quantityInput}
                min="1"
              />
              <button
                style={styles.quantityButton}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button style={styles.addToCartButton} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div style={styles.relatedProducts}>
          <h2 style={styles.relatedProductsTitle}>Related Products</h2>
          <div style={styles.relatedProductsGrid}>
            {relatedProducts.map((relatedProduct) => {
              const cat = categories.find(
                (c) =>
                  c.id ===
                  Number(
                    Object.keys(categoryProducts).find((catId) =>
                      categoryProducts[catId].some(
                        (p) => p.id === relatedProduct.id
                      )
                    )
                  )
              );
              return (
                <RelatedCategoryCard
                  key={relatedProduct.id}
                  category={cat}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Export categoryProducts for use in ProductPage
export { categoryProducts };

const RelatedCategoryCard = ({ category, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "300px",
        ...(isHovered && {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        }),
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={category?.image}
        alt={category?.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease",
          ...(isHovered ? { transform: "scale(1.05)" } : {}),
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "2rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          color: "white",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          {category?.name}
        </h3>
        <div
          style={{
            fontSize: "1.1rem",
            opacity: 0.9,
            marginBottom: "0.5rem",
          }}
        >
          {category?.description}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
