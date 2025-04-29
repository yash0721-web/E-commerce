import React, { useEffect, useState } from "react";

const PRODUCTS_API = "/api/admin/products";
const INVENTORY_API = "/api/admin/inventory";
const RETURNS_API = "/api/admin/returns"; // Adjust as per your backend

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    fetchInventory();
    fetchReturns();
  }, []);

  async function fetchInventory() {
    setLoading(true);
    try {
      const res = await fetch(INVENTORY_API);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setMessage("Failed to fetch products.");
    }
    setLoading(false);
  }

  async function fetchReturns() {
    // Dummy: Replace with your backend call
    setReturns([
      { _id: "1", product: "Shirt", user: "John", status: "Pending" },
      { _id: "2", product: "Shoes", user: "Priya", status: "Pending" },
    ]);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      if (editingId) {
        const res = await fetch(`${PRODUCTS_API}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            price: Number(form.price),
            stock: Number(form.stock),
          }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          setMessage(errorData.error || "Action failed. Please try again.");
          setLoading(false);
          return;
        }
        setMessage("Product updated successfully!");
        fetchInventory();
      } else {
        const res = await fetch(PRODUCTS_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            price: Number(form.price),
            stock: Number(form.stock),
          }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          setMessage(errorData.error || "Action failed. Please try again.");
          setLoading(false);
          return;
        }
        setMessage("Product added successfully!");
        fetchInventory();
      }
      setForm({ name: "", price: "", stock: "", category: "" });
      setEditingId(null);
    } catch (err) {
      setMessage("Action failed. Please try again.");
    }
    setLoading(false);
  }

  function handleEdit(product) {
    setForm({
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category,
    });
    setEditingId(product._id);
    setMessage("");
  }

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setLoading(true);
      setMessage("");
      try {
        await fetch(`${PRODUCTS_API}/${id}`, { method: "DELETE" });
        setMessage("Product deleted successfully!");
        fetchInventory();
      } catch (err) {
        setMessage("Delete failed. Please try again.");
      }
      setLoading(false);
    }
  }

  async function handleApproveReturn(id) {
    // Replace with your backend call
    setReturns((prev) =>
      prev.map((r) => (r._id === id ? { ...r, status: "Approved" } : r))
    );
    setMessage("Return request approved!");
  }

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
    loading: {
      color: "#888",
      fontStyle: "italic",
      marginBottom: 12,
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
      {loading && <div style={panelStyles.loading}>Loading...</div>}
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
        />
        <input
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          style={panelStyles.input}
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
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
            onClick={() => {
              setForm({ name: "", price: "", stock: "", category: "" });
              setEditingId(null);
            }}
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
              <th style={panelStyles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" style={panelStyles.empty}>
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p._id}>
                  <td style={panelStyles.td}>{p.name}</td>
                  <td style={panelStyles.td}>{p.price}</td>
                  <td style={panelStyles.td}>{p.stock}</td>
                  <td style={panelStyles.td}>{p.category}</td>
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
                      onClick={() => handleDelete(p._id)}
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
              <th style={panelStyles.th}>Product</th>
              <th style={panelStyles.th}>User</th>
              <th style={panelStyles.th}>Status</th>
              <th style={panelStyles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {returns.length === 0 ? (
              <tr>
                <td colSpan="4" style={panelStyles.empty}>
                  No return requests.
                </td>
              </tr>
            ) : (
              returns.map((r) => (
                <tr key={r._id}>
                  <td style={panelStyles.td}>{r.product}</td>
                  <td style={panelStyles.td}>{r.user}</td>
                  <td style={panelStyles.td}>{r.status}</td>
                  <td style={panelStyles.td}>
                    {r.status === "Pending" && (
                      <button
                        style={panelStyles.actionBtn}
                        onClick={() => handleApproveReturn(r._id)}
                      >
                        Approve
                      </button>
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
