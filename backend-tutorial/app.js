const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const path = require('path');
const app = express();

// Log thử để chắc chắn biến env được load
console.log("CLIENT origin:", process.env.CLIENT);

const corsOptions = {
  origin: process.env.CLIENT || "*", // fallback * để tránh undefined
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

module.exports = app;
