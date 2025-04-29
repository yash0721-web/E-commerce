const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const auth = require("../middleware/auth");

// Apply auth middleware to all routes
router.use(auth);

// Get user's cart
router.get("/", cartController.getCart);

// Add item to cart
router.post("/", cartController.addToCart);

// Update cart item quantity
router.put("/:productId", cartController.updateCartItem);

// Remove item from cart
router.delete("/:productId", cartController.removeFromCart);

// Clear cart
router.delete("/", cartController.clearCart);

module.exports = router;
