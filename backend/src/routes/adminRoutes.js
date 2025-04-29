const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Get inventory details
router.get("/inventory", adminController.getInventory);

// Add a new product
router.post("/products", adminController.addProduct);

// Update a product
router.put("/products/:id", adminController.updateProduct);

// Remove a product
router.delete("/products/:id", adminController.deleteProduct);

// Return request routes
router.get("/returns", adminController.getReturnRequests);
router.post("/returns/:id/approve", adminController.approveReturn);
router.post("/returns/:id/reject", adminController.rejectReturn);

module.exports = router;
