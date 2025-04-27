import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const headerStyles = {
  header: {
    backgroundColor: "white",
    padding: "1rem 2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#2ecc71",
  },
  headerActions: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "transparent",
    border: "2px solid #2ecc71",
    color: "#2ecc71",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  loginButtonHover: {
    backgroundColor: "#2ecc71",
    color: "white",
  },
  cartIcon: {
    position: "relative",
    fontSize: "1.5rem",
    color: "#333",
    cursor: "pointer",
  },
  cartCount: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#2ecc71",
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
};

const Header = () => {
  const cartCount = 0; // This would come from your cart state

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.headerContent}>
        <Link to="/" style={headerStyles.logo}>
          E-Shop
        </Link>
        <nav style={headerStyles.nav}>
          <Link to="/" style={headerStyles.navLink}>
            Home
          </Link>
          <Link to="/products" style={headerStyles.navLink}>
            Products
          </Link>
          <Link to="/categories" style={headerStyles.navLink}>
            Categories
          </Link>
          <Link to="/about" style={headerStyles.navLink}>
            About
          </Link>
          <Link to="/contact" style={headerStyles.navLink}>
            Contact
          </Link>
        </nav>
        <div style={headerStyles.headerActions}>
          <Link to="/login">
            <button style={headerStyles.loginButton}>Login</button>
          </Link>
          <Link to="/cart" style={headerStyles.cartIcon}>
            <FaShoppingCart />
            {cartCount > 0 && (
              <span style={headerStyles.cartCount}>{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
