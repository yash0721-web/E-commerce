// Use the main app from src/app.js for all routing and middleware
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n=== Server Started ===`);
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode`
  );
  console.log(`Listening on port ${PORT}`);
  console.log("Press CTRL+C to stop\n");
});
