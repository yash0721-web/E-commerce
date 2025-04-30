const mongoose = require("mongoose");
const User = require("../models/User");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Mentors1:mentor1234@cluster0.psonjmc.mongodb.net/myshop?retryWrites=true&w=majority&appName=Cluster0";

async function checkAdmin() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Find all admin users
    const adminUsers = await User.find({ role: "admin" });
    console.log("\nFound admin users:", adminUsers.length);

    adminUsers.forEach((admin, index) => {
      console.log(`\nAdmin ${index + 1}:`);
      console.log("Name:", admin.name);
      console.log("Email:", admin.email);
      console.log("Role:", admin.role);
    });

    // Find user by email
    const adminByEmail = await User.findOne({ email: "admin@eshop.com" });
    console.log("\nUser with email admin@eshop.com:");
    if (adminByEmail) {
      console.log("Found:", adminByEmail.email);
      console.log("Role:", adminByEmail.role);
    } else {
      console.log("Not found");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

checkAdmin();
