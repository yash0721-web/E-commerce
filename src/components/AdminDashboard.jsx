import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("products");

  const styles = {
    container: {
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
    },
    title: {
      fontSize: "2rem",
      color: "#2ecc71",
      margin: 0,
    },
    logoutButton: {
      padding: "0.5rem 1rem",
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    tabs: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      borderBottom: "1px solid #ddd",
      paddingBottom: "1rem",
    },
    tab: {
      padding: "0.5rem 1rem",
      cursor: "pointer",
      borderRadius: "4px",
      backgroundColor: "#f9f9f9",
    },
    activeTab: {
      backgroundColor: "#2ecc71",
      color: "white",
    },
    content: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      padding: "1rem",
      textAlign: "left",
      borderBottom: "2px solid #ddd",
      backgroundColor: "#f9f9f9",
    },
    td: {
      padding: "1rem",
      borderBottom: "1px solid #ddd",
    },
    actionButton: {
      padding: "0.5rem 1rem",
      margin: "0 0.5rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    editButton: {
      backgroundColor: "#3498db",
      color: "white",
    },
    deleteButton: {
      backgroundColor: "#e74c3c",
      color: "white",
    },
  };

  // Sample data with Indian names and products
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S23",
      price: 69999,
      stock: 50,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Lenovo Yoga Laptop",
      price: 89999,
      stock: 30,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Boat Wireless Headphones",
      price: 2999,
      stock: 100,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Nike Running Shoes",
      price: 4999,
      stock: 75,
      category: "Sports",
    },
    {
      id: 5,
      name: "Lakme Makeup Kit",
      price: 1999,
      stock: 60,
      category: "Beauty",
    },
  ];

  const orders = [
    {
      id: 1,
      customer: "Rahul Sharma",
      total: 89999,
      status: "Processing",
      date: "2024-03-15",
    },
    {
      id: 2,
      customer: "Priya Patel",
      total: 12999,
      status: "Shipped",
      date: "2024-03-14",
    },
    {
      id: 3,
      customer: "Arjun Singh",
      total: 19999,
      status: "Delivered",
      date: "2024-03-13",
    },
    {
      id: 4,
      customer: "Meera Kapoor",
      total: 29999,
      status: "Processing",
      date: "2024-03-12",
    },
    {
      id: 5,
      customer: "Vikram Reddy",
      total: 49999,
      status: "Shipped",
      date: "2024-03-11",
    },
  ];

  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      role: "user",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      role: "user",
      joinDate: "2024-02-01",
    },
    {
      id: 3,
      name: "Arjun Singh",
      email: "arjun.singh@example.com",
      role: "user",
      joinDate: "2024-01-20",
    },
    {
      id: 4,
      name: "Meera Kapoor",
      email: "meera.kapoor@example.com",
      role: "user",
      joinDate: "2024-02-15",
    },
    {
      id: 5,
      name: "Vikram Reddy",
      email: "vikram.reddy@example.com",
      role: "user",
      joinDate: "2024-01-10",
    },
  ];

  const renderProducts = () => (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Price (₹)</th>
          <th style={styles.th}>Stock</th>
          <th style={styles.th}>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td style={styles.td}>{product.id}</td>
            <td style={styles.td}>{product.name}</td>
            <td style={styles.td}>₹{product.price.toLocaleString()}</td>
            <td style={styles.td}>{product.stock}</td>
            <td style={styles.td}>{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderOrders = () => (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Customer</th>
          <th style={styles.th}>Total (₹)</th>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td style={styles.td}>{order.id}</td>
            <td style={styles.td}>{order.customer}</td>
            <td style={styles.td}>₹{order.total.toLocaleString()}</td>
            <td style={styles.td}>{order.status}</td>
            <td style={styles.td}>{order.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderUsers = () => (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Role</th>
          <th style={styles.th}>Join Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={styles.td}>{user.id}</td>
            <td style={styles.td}>{user.name}</td>
            <td style={styles.td}>{user.email}</td>
            <td style={styles.td}>{user.role}</td>
            <td style={styles.td}>{user.joinDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <button style={styles.logoutButton} onClick={logout}>
          Logout
        </button>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === "products" && styles.activeTab),
          }}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === "orders" && styles.activeTab),
          }}
          onClick={() => setActiveTab("orders")}
        >
          Orders
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === "users" && styles.activeTab),
          }}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
      </div>

      <div style={styles.content}>
        {activeTab === "products" && renderProducts()}
        {activeTab === "orders" && renderOrders()}
        {activeTab === "users" && renderUsers()}
      </div>
    </div>
  );
};

export default AdminDashboard;
