import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const cartStyles = {
  cartContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#333",
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#333",
  },
  itemPrice: {
    fontSize: "1.1rem",
    color: "#2ecc71",
    marginBottom: "0.5rem",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  quantityButton: {
    padding: "0.25rem 0.5rem",
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  quantityButtonHover: {
    backgroundColor: "#e0e0e0",
  },
  quantity: {
    padding: "0.25rem 0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    minWidth: "40px",
    textAlign: "center",
  },
  removeButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#ff4444",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  removeButtonHover: {
    backgroundColor: "#cc0000",
  },
  cartSummary: {
    marginTop: "2rem",
    padding: "1.5rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    fontSize: "1.1rem",
  },
  total: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#333",
  },
  checkoutButton: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  checkoutButtonHover: {
    backgroundColor: "#27ae60",
  },
  emptyCart: {
    textAlign: "center",
    padding: "2rem",
  },
  emptyCartText: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "1rem",
  },
  continueShopping: {
    display: "inline-block",
    padding: "0.8rem 1.5rem",
    backgroundColor: "#2ecc71",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  continueShoppingHover: {
    backgroundColor: "#27ae60",
  },
};

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={cartStyles.cartContainer}>
        <div style={cartStyles.emptyCart}>
          <p style={cartStyles.emptyCartText}>Your cart is empty</p>
          <Link to="/products" style={cartStyles.continueShopping}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={cartStyles.cartContainer}>
      <h1 style={cartStyles.heading}>Your Cart</h1>
      <div style={cartStyles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} style={cartStyles.cartItem}>
            <img
              src={item.image}
              alt={item.title}
              style={cartStyles.itemImage}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100?text=No+Image";
              }}
            />
            <div style={cartStyles.itemDetails}>
              <h3 style={cartStyles.itemName}>{item.title}</h3>
              <p style={cartStyles.itemPrice}>₹{item.price.toFixed(2)}</p>
              <div style={cartStyles.quantityControls}>
                <button
                  style={cartStyles.quantityButton}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span style={cartStyles.quantity}>{item.quantity}</span>
                <button
                  style={cartStyles.quantityButton}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              style={cartStyles.removeButton}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div style={cartStyles.cartSummary}>
        <div style={cartStyles.summaryItem}>
          <span>Subtotal:</span>
          <span>₹{getCartTotal().toFixed(2)}</span>
        </div>
        <div style={cartStyles.summaryItem}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div style={{ ...cartStyles.summaryItem, ...cartStyles.total }}>
          <span>Total:</span>
          <span>₹{getCartTotal().toFixed(2)}</span>
        </div>
        <button style={cartStyles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
