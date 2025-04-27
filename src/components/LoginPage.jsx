import React, { useState } from "react";
import { Link } from "react-router-dom";

const loginStyles = {
  loginPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 200px)",
    backgroundColor: "#f5f5f5",
  },
  loginContainer: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#333",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#333",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  inputFocus: {
    outline: "none",
    borderColor: "#2ecc71",
  },
  submitButton: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#27ae60",
  },
  toggleForm: {
    textAlign: "center",
    marginTop: "1.5rem",
    color: "#666",
  },
  toggleButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#2ecc71",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "0.5rem",
  },
};

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div style={loginStyles.loginPage}>
      <div style={loginStyles.loginContainer}>
        <h2 style={loginStyles.heading}>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={loginStyles.formGroup}>
              <label htmlFor="name" style={loginStyles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={loginStyles.input}
              />
            </div>
          )}
          <div style={loginStyles.formGroup}>
            <label htmlFor="email" style={loginStyles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={loginStyles.input}
            />
          </div>
          <div style={loginStyles.formGroup}>
            <label htmlFor="password" style={loginStyles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={loginStyles.input}
            />
          </div>
          <button type="submit" style={loginStyles.submitButton}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div style={loginStyles.toggleForm}>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              style={loginStyles.toggleButton}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
