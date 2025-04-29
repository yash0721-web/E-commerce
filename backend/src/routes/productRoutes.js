const express = require("express");
const router = express.Router();

// Placeholder route for products
router.get("/", (req, res) => {
  res.json({ message: "Product routes working!" });
});

module.exports = router;
