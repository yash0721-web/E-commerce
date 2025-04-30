const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Mentors1:mentor1234@cluster0.psonjmc.mongodb.net/myshop?retryWrites=true&w=majority&appName=Cluster0";

async function testLogin() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Find admin user
    const admin = await User.findOne({ email: "admin@eshop.com" });
    if (!admin) {
      console.log("Admin user not found");
      return;
    }

    console.log("\nAdmin user found:");
    console.log("Email:", admin.email);
    console.log("Role:", admin.role);
    console.log("Password hash:", admin.password);

    // Test password
    const testPassword = "admin123";
    const isMatch = await bcrypt.compare(testPassword, admin.password);
    console.log("\nPassword verification:");
    console.log("Test password:", testPassword);
    console.log("Password matches:", isMatch);

    if (!isMatch) {
      console.log("\nUpdating password...");
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(testPassword, salt);
      await admin.save();
      console.log("Password updated successfully");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

testLogin();
