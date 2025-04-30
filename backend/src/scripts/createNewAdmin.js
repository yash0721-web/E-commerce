const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Mentors1:mentor1234@cluster0.psonjmc.mongodb.net/myshop?retryWrites=true&w=majority&appName=Cluster0";

async function createNewAdmin() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Delete any existing admin users
    await User.deleteMany({ role: "admin" });
    console.log("Deleted existing admin users");

    // Create new admin user (plain password, let pre-save hook hash it)
    const admin = new User({
      name: "Admin",
      email: "admin@eshop.com",
      password: "admin123",
      role: "admin",
    });

    await admin.save();
    console.log("Admin user created successfully");
    console.log("Admin credentials:");
    console.log("Email: admin@eshop.com");
    console.log("Password: admin123");
    console.log("Role: admin");

    // Verify the admin user
    const verifiedAdmin = await User.findOne({ email: "admin@eshop.com" });
    console.log("\nVerifying admin user:");
    console.log("Email:", verifiedAdmin.email);
    console.log("Role:", verifiedAdmin.role);
    console.log("Password hash:", verifiedAdmin.password);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

createNewAdmin();
