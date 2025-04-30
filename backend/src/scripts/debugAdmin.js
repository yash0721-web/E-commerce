const mongoose = require("mongoose");
const User = require("../models/User");

const debugAdmin = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");

    // Connect to MongoDB with more detailed options
    await mongoose.connect("mongodb://localhost:27017/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log("Successfully connected to MongoDB");

    // Check if users collection exists
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const usersCollectionExists = collections.some(
      (col) => col.name === "users"
    );
    console.log("Users collection exists:", usersCollectionExists);

    if (!usersCollectionExists) {
      console.log("Users collection not found. Creating...");
      await mongoose.connection.createCollection("users");
    }

    // Find admin user with detailed query
    const admin = await User.findOne({
      email: "admin@example.com",
      role: "admin",
    }).select("+password");

    if (admin) {
      console.log("\nAdmin user details:");
      console.log("Name:", admin.name);
      console.log("Email:", admin.email);
      console.log("Role:", admin.role);
      console.log("Created at:", admin.createdAt);
      console.log("Has password:", !!admin.password);
    } else {
      console.log("\nAdmin user not found. Checking all users...");
      const allUsers = await User.find({});
      console.log("Total users in database:", allUsers.length);
      if (allUsers.length > 0) {
        console.log("\nFirst few users:");
        allUsers.slice(0, 3).forEach((user) => {
          console.log({
            name: user.name,
            email: user.email,
            role: user.role,
          });
        });
      }
    }
  } catch (error) {
    console.error("Debug error:", error);
    if (error.name === "MongoServerSelectionError") {
      console.error("Could not connect to MongoDB. Is the server running?");
    }
  } finally {
    await mongoose.connection.close();
    console.log("\nMongoDB connection closed");
  }
};

debugAdmin();
