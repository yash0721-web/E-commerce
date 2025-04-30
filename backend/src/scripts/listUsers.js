const mongoose = require("mongoose");
const User = require("../models/User");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Mentors1:mentor1234@cluster0.psonjmc.mongodb.net/myshop?retryWrites=true&w=majority&appName=Cluster0";

async function listUsers() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const users = await User.find();
    console.log(`\nFound ${users.length} users:`);
    users.forEach((user, idx) => {
      console.log(`User ${idx + 1}:`);
      console.log("  Name:", user.name);
      console.log("  Email:", user.email);
      console.log("  Role:", user.role);
    });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

listUsers();
