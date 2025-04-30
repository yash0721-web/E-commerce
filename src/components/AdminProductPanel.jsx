import React, { useState, useEffect } from "react";

const API_BASE = "http://localhost:5000/api";

export default function AdminProductPanel() {
  // Load products from localStorage on initial render
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("adminProducts");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Load return requests from localStorage
  const [returns, setReturns] = useState(() => {
    const savedReturns = localStorage.getItem("adminReturns");
    return savedReturns ? JSON.parse(savedReturns) : [];
  });

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    link: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("adminProducts", JSON.stringify(products));
  }, [products]);

  // Save return requests to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("adminReturns", JSON.stringify(returns));
  }, [returns]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function addProductToBackend(product) {
    try {
      const response = await fetch(`${API_BASE}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!response.ok) throw new Error("Failed to add product to backend");
      return await response.json();
    } catch (error) {
      console.error("Backend add product error:", error);
      return null;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    // Validate form
    if (
      !form.name ||
      !form.price ||
      !form.stock ||
      !form.category ||
      !form.link
    ) {
      setMessage("Please fill in all fields");
      return;
    }

    if (editingId) {
      // Update existing product (local only)
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === editingId
            ? {
                ...p,
                name: form.name,
                price: Number(form.price),
                stock: Number(form.stock),
                category: form.category,
                link: form.link,
              }
            : p
        )
      );
      setMessage("Product updated successfully!");
    } else {
      // Add new product (local and backend)
      const newProduct = {
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock),
        category: form.category,
        link: form.link,
      };
      addProductToBackend(newProduct).then((savedProduct) => {
        if (savedProduct && savedProduct._id) {
          setProducts((prev) => [
            ...prev,
            { ...newProduct, id: savedProduct._id },
          ]);
        } else {
          setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
          setMessage("Product added locally, but failed to save to database.");
        }
      });
    }

    // Reset form
    setForm({ name: "", price: "", stock: "", category: "", link: "" });
    setEditingId(null);
  }

  function handleEdit(product) {
    setForm({
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category,
      link: product.link || "",
    });
    setEditingId(product.id);
    setMessage("");
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setMessage("Product deleted successfully!");
    }
  }

  function handleCancel() {
    setForm({ name: "", price: "", stock: "", category: "", link: "" });
    setEditingId(null);
    setMessage("");
  }

  function handleApproveReturn(id) {
    setReturns((prevReturns) =>
      prevReturns.map((r) => (r.id === id ? { ...r, status: "Approved" } : r))
    );
    setMessage("Return request approved successfully!");
  }

  function handleRejectReturn(id) {
    setReturns((prevReturns) =>
      prevReturns.map((r) => (r.id === id ? { ...r, status: "Rejected" } : r))
    );
    setMessage("Return request rejected successfully!");
  }

  // --- Styles ---
  const panelStyles = {
    card: {
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      padding: 32,
      margin: "0 auto",
      maxWidth: 900,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 24,
      color: "#2ecc71",
    },
    form: {
      display: "flex",
      gap: 12,
      marginBottom: 24,
      flexWrap: "wrap",
      alignItems: "center",
    },
    input: {
      padding: "0.5rem 1rem",
      border: "1px solid #ddd",
      borderRadius: 4,
      fontSize: 16,
      minWidth: 120,
    },
    button: {
      padding: "0.5rem 1.2rem",
      background: "#2ecc71",
      color: "#fff",
      border: "none",
      borderRadius: 4,
      fontWeight: 600,
      cursor: "pointer",
      marginLeft: 8,
      transition: "background 0.2s",
    },
    cancelButton: {
      background: "#e74c3c",
      marginLeft: 8,
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: 16,
    },
    th: {
      background: "#f9f9f9",
      padding: 12,
      textAlign: "left",
      borderBottom: "2px solid #eee",
      fontWeight: 700,
      fontSize: 16,
    },
    td: {
      padding: 12,
      borderBottom: "1px solid #eee",
      fontSize: 15,
    },
    actionBtn: {
      padding: "0.3rem 0.8rem",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      fontWeight: 600,
      marginRight: 8,
      background: "#3498db",
      color: "#fff",
    },
    deleteBtn: {
      background: "#e74c3c",
    },
    message: {
      marginBottom: 16,
      color: "#2ecc71",
      fontWeight: 600,
    },
    error: {
      color: "#e74c3c",
    },
    empty: {
      color: "#888",
      textAlign: "center",
      padding: 24,
    },
  };

  return (
    <div style={panelStyles.card}>
      <div style={panelStyles.sectionTitle}>Manage Products</div>
      {message && <div style={panelStyles.message}>{message}</div>}
      <form onSubmit={handleSubmit} style={panelStyles.form}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={panelStyles.input}
          required
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          style={panelStyles.input}
          required
          type="number"
          min="0"
        />
        <input
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          style={panelStyles.input}
          required
          type="number"
          min="0"
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          style={panelStyles.input}
          required
        />
        <input
          name="link"
          placeholder="Product Link"
          value={form.link}
          onChange={handleChange}
          style={panelStyles.input}
          required
        />
        <button type="submit" style={panelStyles.button}>
          {editingId ? "Update" : "Add"} Product
        </button>
        {editingId && (
          <button
            type="button"
            style={{ ...panelStyles.button, ...panelStyles.cancelButton }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>

      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Product List</h3>
        <table style={panelStyles.table}>
          <thead>
            <tr>
              <th style={panelStyles.th}>Name</th>
              <th style={panelStyles.th}>Price</th>
              <th style={panelStyles.th}>Stock</th>
              <th style={panelStyles.th}>Category</th>
              <th style={panelStyles.th}>Link</th>
              <th style={panelStyles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" style={panelStyles.empty}>
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id}>
                  <td style={panelStyles.td}>{p.name}</td>
                  <td style={panelStyles.td}>{p.price}</td>
                  <td style={panelStyles.td}>{p.stock}</td>
                  <td style={panelStyles.td}>{p.category}</td>
                  <td style={panelStyles.td}>
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td style={panelStyles.td}>
                    <button
                      style={panelStyles.actionBtn}
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        ...panelStyles.actionBtn,
                        ...panelStyles.deleteBtn,
                      }}
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 48 }}>
        <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Return Requests</h3>
        <table style={panelStyles.table}>
          <thead>
            <tr>
              <th style={panelStyles.th}>Order ID</th>
              <th style={panelStyles.th}>Product</th>
              <th style={panelStyles.th}>User</th>
              <th style={panelStyles.th}>Reason</th>
              <th style={panelStyles.th}>Status</th>
              <th style={panelStyles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {returns.length === 0 ? (
              <tr>
                <td colSpan="6" style={panelStyles.empty}>
                  No return requests found.
                </td>
              </tr>
            ) : (
              returns.map((r) => (
                <tr key={r.id}>
                  <td style={panelStyles.td}>{r.orderId}</td>
                  <td style={panelStyles.td}>{r.productName}</td>
                  <td style={panelStyles.td}>{r.userName}</td>
                  <td style={panelStyles.td}>{r.reason}</td>
                  <td style={panelStyles.td}>{r.status}</td>
                  <td style={panelStyles.td}>
                    {r.status === "Pending" && (
                      <>
                        <button
                          style={panelStyles.actionBtn}
                          onClick={() => handleApproveReturn(r.id)}
                        >
                          Approve
                        </button>
                        <button
                          style={{
                            ...panelStyles.actionBtn,
                            ...panelStyles.deleteBtn,
                          }}
                          onClick={() => handleRejectReturn(r.id)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
