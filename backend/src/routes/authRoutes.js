const express = require("express");
const router = express.Router();
const { login, signup, getAllUsers } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Test endpoint
router.get("/test", (req, res) => {
  console.log("Test endpoint hit");
  res.json({ message: "Server is running" });
});

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected routes (admin only)
router.get("/users", authMiddleware, getAllUsers);

module.exports = router;
