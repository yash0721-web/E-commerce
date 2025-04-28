import React from "react";
import { Link } from "react-router-dom";

const productCardStyles = {
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  imageContainer: {
    position: "relative",
    paddingTop: "75%", // 4:3 aspect ratio
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  imageHover: {
    transform: "scale(1.05)",
  },
  info: {
    padding: "1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.25rem",
    marginBottom: "0.5rem",
    color: "#2c3e50",
    fontWeight: "600",
  },
  price: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "0.95rem",
    color: "#34495e",
    marginBottom: "1.5rem",
    lineHeight: "1.5",
    flex: 1,
  },
  button: {
    display: "block",
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 5px rgba(46, 204, 113, 0.2)",
  },
  buttonHover: {
    backgroundColor: "#27ae60",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(46, 204, 113, 0.3)",
  },
};

const ProductCard = ({ product }) => {
  const { id, title, price, description, image } = product;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...productCardStyles.card,
        ...(isHovered && productCardStyles.cardHover),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`}>
        <div style={productCardStyles.imageContainer}>
          <img
            src={image}
            alt={title}
            style={{
              ...productCardStyles.image,
              ...(isHovered && productCardStyles.imageHover),
            }}
          />
        </div>
      </Link>
      <div style={productCardStyles.info}>
        <h3 style={productCardStyles.title}>{title}</h3>
        <p style={productCardStyles.price}>₹{price.toFixed(2)}</p>
        <p style={productCardStyles.description}>{description}</p>
        <button
          style={{
            ...productCardStyles.button,
            ...(isHovered && productCardStyles.buttonHover),
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
