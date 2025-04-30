const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Signup controller
exports.signup = async (req, res) => {
  try {
    console.log("Signup request received:", {
      name: req.body.name,
      email: req.body.email,
      password: "***",
    });

    const { name, email, password } = req.body;

    // Validate required fields with specific messages
    if (!name) {
      console.log("Validation failed: Name is required");
      return res.status(400).json({
        error: "Validation Error",
        details: "Name is required",
      });
    }
    if (!email) {
      console.log("Validation failed: Email is required");
      return res.status(400).json({
        error: "Validation Error",
        details: "Email is required",
      });
    }
    if (!password) {
      console.log("Validation failed: Password is required");
      return res.status(400).json({
        error: "Validation Error",
        details: "Password is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Validation failed: Invalid email format");
      return res.status(400).json({
        error: "Validation Error",
        details: "Invalid email format. Please use a valid email address",
      });
    }

    // Validate password length
    if (password.length < 6) {
      console.log("Validation failed: Password too short");
      return res.status(400).json({
        error: "Validation Error",
        details: "Password must be at least 6 characters long",
      });
    }

    // Check if user already exists
    console.log("Checking if user exists...");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Validation failed: Email already exists");
      return res.status(400).json({
        error: "Validation Error",
        details:
          "This email is already registered. Please use a different email or login",
      });
    }

    // Create new user
    console.log("Creating new user...");
    const user = new User({
      name,
      email,
      password,
    });

    console.log("Attempting to save user...");
    await user.save();
    console.log("User saved successfully");

    // Generate JWT token
    console.log("Generating JWT token...");
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || "fallback_secret_key",
      { expiresIn: "24h" }
    );

    console.log("Signup successful");
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Signup error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    // Handle specific MongoDB errors
    if (error.name === "MongoError" && error.code === 11000) {
      return res.status(400).json({
        error: "Validation Error",
        details: "This email is already registered",
      });
    }

    res.status(500).json({
      error: "Server Error",
      details: error.message,
    });
  }
};

// Login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt received:", { email, password });

    if (!email || !password) {
      console.log("Missing email or password");
      return res.status(400).json({
        error: "Missing credentials",
        details: "Email and password are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(401).json({
        error: "Invalid credentials",
        details: "User not found",
      });
    }

    console.log("User found:", {
      id: user._id,
      email: user.email,
      role: user.role,
      passwordHash: user.password,
    });
    console.log("Comparing passwords...");
    console.log("Plain password:", password);
    console.log("Hashed password:", user.password);
    const isMatch = await user.comparePassword(password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      console.log("Password mismatch for user:", email);
      return res.status(401).json({
        error: "Invalid credentials",
        details: "Incorrect password",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || "fallback_secret_key",
      { expiresIn: "24h" }
    );

    console.log("Login successful for user:", email);

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      error: "Failed to login",
      details: error.message,
    });
  }
};

// Get all users (admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
