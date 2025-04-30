const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Mentors1:mentor1234@cluster0.psonjmc.mongodb.net/myshop?retryWrites=true&w=majority&appName=Cluster0";

async function resetAdminPassword() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Find or create admin user
    let admin = await User.findOne({ role: "admin" });

    if (!admin) {
      admin = new User({
        name: "Admin",
        email: "admin@eshop.com",
        password: "admin123",
        role: "admin",
      });
    } else {
      admin.email = "admin@eshop.com";
      admin.password = "admin123";
    }

    await admin.save();
    console.log("Admin password reset successfully");
    console.log("New credentials:");
    console.log("Email: admin@eshop.com");
    console.log("Password: admin123");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

resetAdminPassword();
