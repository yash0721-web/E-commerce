const mongoose = require("mongoose");

const User = require("./src/models/User");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://Mentors1:mentor1234@cluster0.psonjmc.mongodb.net/myshop?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    console.log("MongoDB Connected");

    // Create admin user
    const adminUser = {
      name: "Admin",
      email: "admin@eshop.com",
      password: "admin123", // You should change this password after first login
      role: "admin",
    };

    try {
      // Check if admin already exists
      const existingAdmin = await User.findOne({ email: adminUser.email });

      if (existingAdmin) {
        console.log("Admin user already exists");
        process.exit(0);
      }

      // Create new admin user
      const user = await User.create(adminUser);
      console.log("Admin user created successfully:", {
        id: user._id,
        email: user.email,
        role: user.role,
      });

      process.exit(0);
    } catch (error) {
      console.error("Error creating admin user:", error);
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });
