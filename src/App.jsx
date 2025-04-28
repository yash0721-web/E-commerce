import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";
import { CartProvider } from "./context/CartContext";

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

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={appStyles.app}>
          <Header />
          <main style={appStyles.mainContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
