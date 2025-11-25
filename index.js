const express = require("express");
const dotenv = require("dotenv");
const apiLimiter = require("./middlewares/rateLimiter");

dotenv.config();
const app = express();

// Apply rate limiter to all routes
app.use("/api", apiLimiter);

app.get("/api/test", (req, res) => {
  res.json({ message: "API working with rate limiting!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
