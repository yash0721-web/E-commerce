import React from "react";
import { Link } from "react-router-dom";

const productCardStyles = {
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  imageContainer: {
    position: "relative",
    paddingTop: "100%",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  info: {
    padding: "1.5rem",
  },
  title: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#333",
  },
  price: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "1.5rem",
    lineHeight: "1.5",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#27ae60",
  },
};

const ProductCard = ({ product }) => {
  const { id, title, price, description, image } = product;

  return (
    <div style={productCardStyles.card}>
      <Link to={`/product/${id}`}>
        <div style={productCardStyles.imageContainer}>
          <img src={image} alt={title} style={productCardStyles.image} />
        </div>
      </Link>
      <div style={productCardStyles.info}>
        <h3 style={productCardStyles.title}>{title}</h3>
        <p style={productCardStyles.price}>${price.toFixed(2)}</p>
        <p style={productCardStyles.description}>{description}</p>
        <button style={productCardStyles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
