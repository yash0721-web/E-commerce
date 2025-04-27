import React, { useState } from "react";

const newsletterStyles = {
  newsletterSection: {
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "4rem 2rem",
    textAlign: "center",
  },
  newsletterContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    opacity: "0.9",
  },
  form: {
    display: "flex",
    gap: "1rem",
    maxWidth: "500px",
    margin: "0 auto",
  },
  input: {
    flex: 1,
    padding: "1rem",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  button: {
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#222",
  },
  "@media (max-width: 768px)": {
    newsletterSection: {
      padding: "3rem 1rem",
    },
    form: {
      flexDirection: "column",
    },
    button: {
      width: "100%",
    },
  },
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section style={newsletterStyles.newsletterSection}>
      <div style={newsletterStyles.newsletterContent}>
        <h2 style={newsletterStyles.heading}>Subscribe to Our Newsletter</h2>
        <p style={newsletterStyles.description}>
          Stay updated with our latest products and exclusive offers
        </p>
        <form onSubmit={handleSubmit} style={newsletterStyles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={newsletterStyles.input}
          />
          <button type="submit" style={newsletterStyles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
