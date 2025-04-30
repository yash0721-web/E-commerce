import React, { createContext, useState, useContext, useEffect } from "react";
import {
  login as authLogin,
  logout as authLogout,
  getCurrentUser,
  setTestToken as authSetTestToken,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const userData = await authLogin(email, password);
      setUser({ ...userData, isAuthenticated: true });
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const setTestToken = () => {
    const userData = authSetTestToken();
    setUser({ ...userData, isAuthenticated: true });
    return userData;
  };

  const logout = () => {
    authLogout();
    setUser({ isAuthenticated: false });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, setTestToken, loading }}
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
