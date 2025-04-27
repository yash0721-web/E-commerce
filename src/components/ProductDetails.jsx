import React, { useState } from "react";
import { useParams } from "react-router-dom";

const productDetailsStyles = {
  productDetails: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    marginBottom: "3rem",
  },
  productImage: {
    maxHeight: "500px",
    overflow: "hidden",
    borderRadius: "8px",
  },
  productImageImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  productTitle: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  },
  price: {
    fontSize: "1.5rem",
    color: "#2ecc71",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.6",
  },
  features: {
    marginTop: "2rem",
  },
  featuresTitle: {
    fontSize: "1.3rem",
    color: "#333",
    marginBottom: "1rem",
  },
  featuresList: {
    listStyle: "none",
    padding: 0,
  },
  featureItem: {
    marginBottom: "0.5rem",
    color: "#666",
  },
  quantitySelector: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
  quantityLabel: {
    fontSize: "1.1rem",
    color: "#333",
  },
  quantityInput: {
    width: "80px",
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  addToCartButton: {
    padding: "1rem 2rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "2rem",
  },
  addToCartButtonHover: {
    backgroundColor: "#27ae60",
  },
  reviewsSection: {
    marginTop: "3rem",
  },
  reviewsTitle: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "2rem",
  },
  review: {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    borderRadius: "8px",
    marginBottom: "1.5rem",
  },
  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  reviewUser: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
  },
  reviewRating: {
    color: "#ffd700",
    fontSize: "1.2rem",
  },
  reviewComment: {
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "0.5rem",
  },
  reviewDate: {
    color: "#999",
    fontSize: "0.9rem",
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // This would typically come from an API
  const product = {
    id: 1,
    title: "Product 1",
    price: 99.99,
    description:
      "This is a detailed description of the product. It includes all the important features and specifications that customers need to know about.",
    image: "https://via.placeholder.com/500",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Great product! Highly recommended.",
        date: "2023-01-15",
      },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Good quality, but could be better.",
        date: "2023-02-20",
      },
    ],
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Handle add to cart logic here
    console.log("Added to cart:", { product, quantity });
  };

  return (
    <div style={productDetailsStyles.productDetails}>
      <div style={productDetailsStyles.productGrid}>
        <div style={productDetailsStyles.productImage}>
          <img
            src={product.image}
            alt={product.title}
            style={productDetailsStyles.productImageImg}
          />
        </div>
        <div style={productDetailsStyles.productInfo}>
          <h1 style={productDetailsStyles.productTitle}>{product.title}</h1>
          <p style={productDetailsStyles.price}>${product.price.toFixed(2)}</p>
          <p style={productDetailsStyles.description}>{product.description}</p>

          <div style={productDetailsStyles.features}>
            <h3 style={productDetailsStyles.featuresTitle}>Features</h3>
            <ul style={productDetailsStyles.featuresList}>
              {product.features.map((feature, index) => (
                <li key={index} style={productDetailsStyles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div style={productDetailsStyles.quantitySelector}>
            <label
              htmlFor="quantity"
              style={productDetailsStyles.quantityLabel}
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              style={productDetailsStyles.quantityInput}
            />
          </div>

          <button
            style={productDetailsStyles.addToCartButton}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div style={productDetailsStyles.reviewsSection}>
        <h2 style={productDetailsStyles.reviewsTitle}>Customer Reviews</h2>
        {product.reviews.map((review) => (
          <div key={review.id} style={productDetailsStyles.review}>
            <div style={productDetailsStyles.reviewHeader}>
              <span style={productDetailsStyles.reviewUser}>{review.user}</span>
              <span style={productDetailsStyles.reviewRating}>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
            </div>
            <p style={productDetailsStyles.reviewComment}>{review.comment}</p>
            <span style={productDetailsStyles.reviewDate}>{review.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
