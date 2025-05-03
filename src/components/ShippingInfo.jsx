import React from "react";

const shippingStyles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "3rem",
    color: "#2ecc71",
  },
  section: {
    marginBottom: "3rem",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#2ecc71",
  },
  content: {
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  shippingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  shippingCard: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  shippingTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#2ecc71",
  },
  shippingDescription: {
    color: "#333",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    color: "#333",
    lineHeight: "1.6",
  },
  listItem: {
    marginBottom: "0.5rem",
  },
};

const ShippingInfo = () => {
  const shippingOptions = [
    {
      id: 1,
      title: "Standard Shipping",
      description: "3-5 business days",
      price: "Free on orders over $50",
    },
    {
      id: 2,
      title: "Express Shipping",
      description: "1-2 business days",
      price: "$9.99",
    },
    {
      id: 3,
      title: "International Shipping",
      description: "5-10 business days",
      price: "Varies by destination",
    },
  ];

  return (
    <div style={shippingStyles.container}>
      <h1 style={shippingStyles.heading}>Shipping Information</h1>

      <div style={shippingStyles.section}>
        <h2 style={shippingStyles.sectionTitle}>Shipping Options</h2>
        <div style={shippingStyles.shippingGrid}>
          {shippingOptions.map((option) => (
            <div key={option.id} style={shippingStyles.shippingCard}>
              <h3 style={shippingStyles.shippingTitle}>{option.title}</h3>
              <p style={shippingStyles.shippingDescription}>
                {option.description}
              </p>
              <p style={shippingStyles.shippingDescription}>{option.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={shippingStyles.section}>
        <h2 style={shippingStyles.sectionTitle}>Processing Time</h2>
        <p style={shippingStyles.content}>
          Orders are typically processed within 1-2 business days. During peak
          seasons or promotional periods, processing time may be extended.
        </p>
      </div>

      <div style={shippingStyles.section}>
        <h2 style={shippingStyles.sectionTitle}>Shipping Policies</h2>
        <ul style={shippingStyles.list}>
          <li style={shippingStyles.listItem}>
            We ship to all 50 states in the US and internationally to select
            countries.
          </li>
          <li style={shippingStyles.listItem}>
            Orders are shipped Monday through Friday, excluding holidays.
          </li>
          <li style={shippingStyles.listItem}>
            Tracking information will be provided via email once your order
            ships.
          </li>
          <li style={shippingStyles.listItem}>
            International orders may be subject to customs fees and import
            taxes.
          </li>
          <li style={shippingStyles.listItem}>
            We are not responsible for any delays caused by customs or local
            delivery services.
          </li>
        </ul>
      </div>

      <div style={shippingStyles.section}>
        <h2 style={shippingStyles.sectionTitle}>Order Tracking</h2>
        <p style={shippingStyles.content}>
          Once your order has shipped, you will receive a tracking number via
          email. You can use this number to track your package on our website or
          the carrier's website.
        </p>
      </div>
    </div>
  );
};

export default ShippingInfo;
