import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductPage";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";
import Checkout from "./components/Checkout";
import AdminDashboard from "./components/AdminDashboard";
import Careers from "./components/Careers";
import Press from "./components/Press";
import ShippingInfo from "./components/ShippingInfo";
import Returns from "./components/Returns";
import FAQ from "./components/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Protected Route component
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

const appStyles = {
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flex: 1,
    padding: 0,
    maxWidth: "100%",
    margin: "0 auto",
    width: "100%",
  },
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div style={appStyles.app}>
            <Header />
            <main style={appStyles.mainContent}>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/categories" element={<Categories />} />
                <Route
                  path="/category/:categoryId"
                  element={<CategoryPage />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/shipping" element={<ShippingInfo />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/faq" element={<FAQ />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute requireAdmin>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
