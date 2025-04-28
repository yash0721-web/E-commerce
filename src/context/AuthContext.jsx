import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sample users for demonstration (in a real app, this would be from a database)
  const users = [
    {
      email: "admin@eshop.com",
      password: "admin123",
      role: "admin",
      name: "Admin User",
    },
    {
      email: "user@eshop.com",
      password: "user123",
      role: "user",
      name: "Regular User",
    },
  ];

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
        return { success: true, user: foundUser };
      } else {
        return { success: false, error: "Invalid credentials" };
      }
    } catch (error) {
      return { success: false, error: "An error occurred during login" };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const isAdmin = () => {
    return user?.role === "admin";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
