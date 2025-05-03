import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTopStyles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#2ecc71",
    color: "white",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    opacity: 0,
    transform: "scale(0)",
  },
  buttonVisible: {
    opacity: 1,
    transform: "scale(1)",
  },
  buttonHover: {
    backgroundColor: "#27ae60",
    transform: "scale(1.1)",
  },
  icon: {
    fontSize: "1.5rem",
  },
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      style={{
        ...scrollToTopStyles.button,
        ...(isVisible ? scrollToTopStyles.buttonVisible : {}),
      }}
      onClick={scrollToTop}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor =
          scrollToTopStyles.buttonHover.backgroundColor;
        e.currentTarget.style.transform =
          scrollToTopStyles.buttonHover.transform;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor =
          scrollToTopStyles.button.backgroundColor;
        e.currentTarget.style.transform = isVisible
          ? scrollToTopStyles.buttonVisible.transform
          : scrollToTopStyles.button.transform;
      }}
      aria-label="Scroll to top"
    >
      <span style={scrollToTopStyles.icon}>↑</span>
    </button>
  );
};

export default ScrollToTop;
