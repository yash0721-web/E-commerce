const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Protected routes (admin only)
router.get("/users", authMiddleware, authController.getAllUsers);

module.exports = router;
