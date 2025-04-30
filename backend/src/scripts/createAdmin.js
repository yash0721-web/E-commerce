const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const MONGODB_URI = "mongodb://localhost:27017/ecommerce";

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check if admin exists
    let admin = await User.findOne({ email: "admin@eshop.com" });

    if (admin) {
      console.log("Admin user already exists, updating...");
      admin.password = "admin123";
      admin.role = "admin";
    } else {
      console.log("Creating new admin user...");
      admin = new User({
        name: "Admin",
        email: "admin@eshop.com",
        password: "admin123",
        role: "admin",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);

    await admin.save();
    console.log("Admin user created/updated successfully");
    console.log("Admin credentials:");
    console.log("Email: admin@eshop.com");
    console.log("Password: admin123");

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

createAdmin();
