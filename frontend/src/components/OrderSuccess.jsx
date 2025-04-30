import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <div className="order-success-content">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>

        <div className="order-details">
          <p>We've sent a confirmation email with your order details.</p>
          <p>You can track your order status in your account dashboard.</p>
        </div>

        <div className="action-buttons">
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
          <Link to="/orders" className="view-orders">
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
