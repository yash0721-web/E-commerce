import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { placeOrder } from "../services/orderService";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to COD
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        user: user._id,
        items: cart.items.map((item) => ({
          product: item._id,
          quantity: item.quantity,
        })),
        total: cart.total,
        paymentMethod,
        shippingAddress: {
          name: formData.name,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        },
      };

      await placeOrder(orderData);
      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to process order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
    paymentMethod: {
      marginBottom: "2rem",
      padding: "1rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "4px",
    },
    paymentOption: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
      cursor: "pointer",
    },
    radio: {
      marginRight: "1rem",
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
  };

  return (
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
          <h2>Payment Method</h2>
          <div style={styles.paymentMethod}>
            <div style={styles.paymentOption}>
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
            <div style={styles.paymentOption}>
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor="card">Credit/Debit Card</label>
            </div>
          </div>
        </div>

        {paymentMethod === "card" && (
          <>
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
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="cardName">
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
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
                placeholder="123"
              />
            </div>
          </>
        )}

        <div style={{ ...styles.summary, ...styles.fullWidth }}>
          <h2>Order Summary</h2>
          {cart.items.map((item) => (
            <div key={item._id} style={styles.summaryItem}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div style={styles.total}>
            <span>Total:</span>
            <span>${cart.total.toFixed(2)}</span>
          </div>
        </div>

        <div style={{ ...styles.formGroup, ...styles.fullWidth }}>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
