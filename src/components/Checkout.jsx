import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2rem",
      color: "#2ecc71",
      marginBottom: "2rem",
      textAlign: "center",
    },
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
    },
    formGroup: {
      marginBottom: "1rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    fullWidth: {
      gridColumn: "1 / -1",
    },
    summary: {
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "4px",
    },
    summaryItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "0.5rem",
    },
    total: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginTop: "1rem",
      paddingTop: "1rem",
      borderTop: "1px solid #ddd",
    },
    button: {
      width: "100%",
      padding: "1rem",
      backgroundColor: "#2ecc71",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "1rem",
    },
    buttonHover: {
      backgroundColor: "#27ae60",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
      maxWidth: "500px",
      width: "90%",
      textAlign: "center",
    },
    successIcon: {
      fontSize: "4rem",
      color: "#2ecc71",
      marginBottom: "1rem",
    },
    orderDetails: {
      margin: "1.5rem 0",
      textAlign: "left",
    },
    orderItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "0.5rem",
    },
    continueButton: {
      backgroundColor: "#2ecc71",
      color: "white",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "1rem",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleContinue = () => {
    clearCart();
    navigate("/categories");
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Checkout</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
            <h2>Shipping Information</h2>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
            <label style={styles.label} htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="state">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="zipCode">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
            <h2>Payment Information</h2>
          </div>
          <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
            <label style={styles.label} htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="expiryDate">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="MM/YY"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={{ ...styles.summary, ...styles.fullWidth }}>
            <h2>Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.summaryItem}>
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={styles.total}>
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>

          <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
            <button type="submit" style={styles.button}>
              Place Order
            </button>
          </div>
        </form>
      </div>

      {showSuccess && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.successIcon}>✓</div>
            <h2>Order Placed Successfully!</h2>
            <div style={styles.orderDetails}>
              <h3>Order Summary:</h3>
              {cartItems.map((item) => (
                <div key={item.id} style={styles.orderItem}>
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div
                style={{
                  ...styles.orderItem,
                  fontWeight: "bold",
                  marginTop: "1rem",
                }}
              >
                <span>Total:</span>
                <span>₹{getCartTotal().toFixed(2)}</span>
              </div>
            </div>
            <p>
              Thank you for your purchase! Your order has been received and is
              being processed.
            </p>
            <button style={styles.continueButton} onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
