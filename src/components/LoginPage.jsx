import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// API base URL for development
const API_BASE = "http://localhost:5000/api";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      try {
        console.log("Attempting login with:", { email });
      const result = await login(email, password);
        console.log("Login result:", result);

      if (result.success) {
          console.log("Login successful, user role:", result.user.role);
        // Redirect based on role
        if (result.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
          console.error("Login failed:", result.error);
          setError(result.error || "Invalid email or password");
        }
      } catch (error) {
        console.error("Login error:", error);
        setError("Invalid email or password. Please try again.");
      }
    } else {
      // Handle signup
      try {
        console.log("Attempting signup with:", { email, name });
        const response = await fetch(`${API_BASE}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        console.log("Signup response:", data);

        if (!response.ok) {
          throw new Error(data.error || "Failed to sign up");
        }

        // Save token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to home page
        navigate("/");
      } catch (error) {
        console.error("Signup error:", error);
        setError(error.message || "Failed to sign up. Please try again.");
      }
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
    },
    formContainer: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    title: {
      textAlign: "center",
      marginBottom: "2rem",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    input: {
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid #ddd",
      fontSize: "1rem",
    },
    button: {
      padding: "0.75rem",
      backgroundColor: "#2ecc71",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
      marginTop: "1rem",
    },
    toggleButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#2ecc71",
      cursor: "pointer",
      textAlign: "center",
      marginTop: "1rem",
    },
    error: {
      color: "red",
      textAlign: "center",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
          </button>
          {error && <div style={styles.error}>{error}</div>}
        </form>
        <button
          style={styles.toggleButton}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
