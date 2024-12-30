const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api/auth", authRoutes); // Auth routes for sign up and sign in

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
