// Admin Controller
const Product = require("../models/Product");
const Order = require("../models/Order");
const ReturnRequest = require("../models/ReturnRequest");

// Get inventory details
exports.getInventory = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch inventory" });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Failed to add product" });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: "Failed to update product" });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete product" });
  }
};

// Get all return requests
exports.getReturnRequests = async (req, res) => {
  try {
    const returnRequests = await ReturnRequest.find()
      .populate("orderId")
      .populate("userId", "name email")
      .populate("productId", "name")
      .sort({ createdAt: -1 });
    res.json(returnRequests);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch return requests" });
  }
};

// Approve a return request
exports.approveReturn = async (req, res) => {
  try {
    const returnRequest = await ReturnRequest.findById(req.params.id)
      .populate("productId")
      .populate("orderId");

    if (!returnRequest) {
      return res.status(404).json({ error: "Return request not found" });
    }

    // Update return request status
    returnRequest.status = "Approved";
    await returnRequest.save();

    // Update product stock
    const product = await Product.findById(returnRequest.productId);
    if (product) {
      product.stock += 1; // Assuming 1 item per return request
      await product.save();
    }

    // Update order status
    const order = await Order.findById(returnRequest.orderId);
    if (order) {
      order.status = "Returned";
      await order.save();
    }

    res.json({ message: "Return request approved successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to approve return request" });
  }
};

// Reject a return request
exports.rejectReturn = async (req, res) => {
  try {
    const returnRequest = await ReturnRequest.findById(req.params.id);
    if (!returnRequest) {
      return res.status(404).json({ error: "Return request not found" });
    }

    returnRequest.status = "Rejected";
    await returnRequest.save();

    res.json({ message: "Return request rejected successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to reject return request" });
  }
};
