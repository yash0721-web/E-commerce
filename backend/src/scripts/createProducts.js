const mongoose = require("mongoose");
const Product = require("../models/Product");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Mentors1:mentor1234@cluster0.psonjmc.mongodb.net/myshop?retryWrites=true&w=majority&appName=Cluster0";

const sampleProducts = [
  {
    name: "Smartphone X Pro",
    description: "Latest smartphone with 5G support and advanced camera system",
    price: 49999.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    stock: 50,
  },
  {
    name: "Smart Watch",
    description: "Track your fitness and notifications on the go.",
    price: 1499.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    stock: 30,
  },
  {
    name: "Running Shoes",
    description: "Comfortable and durable running shoes for all terrains.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

    category: "Footwear",
    stock: 100,
  },
  {
    name: "Backpack",
    description: "Spacious backpack for travel and daily use.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1692506530242-c12d6c3ae2e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBiYWd8ZW58MHx8MHx8fDA%3D",
    category: "Accessories",
    stock: 75,
  },
];

async function createProducts() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await Product.deleteMany({});
    console.log("Deleted existing products");

    const products = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${products.length} products.`);
    products.forEach((p) => console.log(`- ${p.name} (${p._id})`));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

createProducts();
