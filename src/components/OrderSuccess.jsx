import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const location = useLocation();
  const { paymentMethod } = location.state || { paymentMethod: "cod" };

  const getMessage = () => {
    if (paymentMethod === "cod") {
      return "Thank you for your purchase! Your order has been received and will be delivered soon. Please keep cash ready for payment upon delivery.";
    } else {
      return "Thank you for your purchase! Your order has been received and is being processed. We've sent a confirmation email with your order details.";
    }
  };

  return (
    <div className="order-success-container">
      <div className="order-success-content">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>{getMessage()}</p>

        <div className="order-details">
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
