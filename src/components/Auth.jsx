import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "/api/auth";

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const endpoint = isLogin ? "login" : "signup";
      const response = await fetch(`${API_BASE}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Save token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage(data.message);

      // Redirect based on role
      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: 400,
      margin: "2rem auto",
      padding: "2rem",
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 24,
      color: "#2ecc71",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
    },
    input: {
      padding: "0.8rem",
      border: "1px solid #ddd",
      borderRadius: 4,
      fontSize: 16,
    },
    button: {
      padding: "0.8rem",
      background: "#2ecc71",
      color: "#fff",
      border: "none",
      borderRadius: 4,
      fontSize: 16,
      fontWeight: 600,
      cursor: "pointer",
      marginTop: 8,
    },
    toggleButton: {
      background: "none",
      border: "none",
      color: "#3498db",
      cursor: "pointer",
      padding: 0,
      marginTop: 16,
      textAlign: "center",
    },
    message: {
      marginBottom: 16,
      color: "#2ecc71",
      textAlign: "center",
    },
    error: {
      color: "#e74c3c",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>

      {message && (
        <div
          style={{
            ...styles.message,
            ...(message.includes("error") && styles.error),
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
          minLength={6}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button
        style={styles.toggleButton}
        onClick={() => {
          setIsLogin(!isLogin);
          setMessage("");
        }}
      >
        {isLogin
          ? "Need an account? Sign up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
}
