const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String }, // Optional: add more fields as needed
  link: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
