const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
require("dotenv").config();
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Request logging middleware
app.use((req, res, next) => {
  console.log("\n=== New Request ===");
  console.log(`Time: ${new Date().toISOString()}`);
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: `Cannot ${req.method} ${req.url}`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("\n=== Error Details ===");
  console.error("Error:", err);
  console.error("Stack:", err.stack);
  console.error("Request:", {
    method: req.method,
    url: req.url,
    body: req.body,
    headers: req.headers,
  });

  // Handle specific error types
  if (err.name === "ValidationError") {
    return res.status(400).json({
      error: "Validation Error",
      details: err.message,
    });
  }

  if (err.name === "MongoError" && err.code === 11000) {
    return res.status(400).json({
      error: "Duplicate Entry",
      details: "This email is already registered",
    });
  }

  // Default error response
  res.status(500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log("\n=== Server Started ===");
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode`
  );
  console.log(`Listening on port ${PORT}`);
  console.log("Press CTRL+C to stop\n");
});
