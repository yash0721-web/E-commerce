const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const verifyAdminPassword = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect("mongodb://localhost:27017/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Find admin user
    const admin = await User.findOne({
      email: "admin@example.com",
      role: "admin",
    }).select("+password");

    if (!admin) {
      console.log("Admin user not found");
      return;
    }

    console.log("\nCurrent admin details:");
    console.log("Name:", admin.name);
    console.log("Email:", admin.email);
    console.log("Role:", admin.role);

    // Test password
    const testPassword = "admin123";
    const isMatch = await bcrypt.compare(testPassword, admin.password);
    console.log("\nPassword verification:");
    console.log("Test password matches:", isMatch);

    if (!isMatch) {
      console.log("\nUpdating password...");
      // Update password
      admin.password = await bcrypt.hash(testPassword, 10);
      await admin.save();
      console.log("Password updated successfully");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\nConnection closed");
  }
};

verifyAdminPassword();
