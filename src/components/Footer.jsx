import React from "react";
import { Link } from "react-router-dom";

const footerStyles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "3rem 2rem",
    marginTop: "auto",
  },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  footerHeading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  footerLink: {
    color: "#ccc",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  footerLinkHover: {
    color: "#2ecc71",
  },
  socialLinks: {
    display: "flex",
    gap: "1rem",
  },
  socialIcon: {
    fontSize: "1.5rem",
    color: "#ccc",
    transition: "color 0.3s ease",
  },
  socialIconHover: {
    color: "#2ecc71",
  },
  copyright: {
    textAlign: "center",
    marginTop: "2rem",
    paddingTop: "2rem",
    borderTop: "1px solid #444",
    color: "#ccc",
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerContent}>
        <div style={footerStyles.footerSection}>
          <h3 style={footerStyles.footerHeading}>About Us</h3>
          <Link to="/about" style={footerStyles.footerLink}>
            Our Story
          </Link>
          <Link to="/careers" style={footerStyles.footerLink}>
            Careers
          </Link>
          <Link to="/press" style={footerStyles.footerLink}>
            Press
          </Link>
        </div>
        <div style={footerStyles.footerSection}>
          <h3 style={footerStyles.footerHeading}>Customer Service</h3>
          <Link to="/contact" style={footerStyles.footerLink}>
            Contact Us
          </Link>
          <Link to="/shipping" style={footerStyles.footerLink}>
            Shipping Info
          </Link>
          <Link to="/returns" style={footerStyles.footerLink}>
            Returns
          </Link>
          <Link to="/faq" style={footerStyles.footerLink}>
            FAQ
          </Link>
        </div>
        <div style={footerStyles.footerSection}>
          <h3 style={footerStyles.footerHeading}>My Account</h3>
          <Link to="/account" style={footerStyles.footerLink}>
            My Account
          </Link>
          <Link to="/orders" style={footerStyles.footerLink}>
            Order Status
          </Link>
          <Link to="/wishlist" style={footerStyles.footerLink}>
            Wishlist
          </Link>
        </div>
        <div style={footerStyles.footerSection}>
          <h3 style={footerStyles.footerHeading}>Connect With Us</h3>
          <div style={footerStyles.socialLinks}>
            <a href="#" style={footerStyles.footerLink}>
              <i
                className="fab fa-facebook"
                style={footerStyles.socialIcon}
              ></i>
            </a>
            <a href="#" style={footerStyles.footerLink}>
              <i className="fab fa-twitter" style={footerStyles.socialIcon}></i>
            </a>
            <a href="#" style={footerStyles.footerLink}>
              <i
                className="fab fa-instagram"
                style={footerStyles.socialIcon}
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div style={footerStyles.copyright}>
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
