const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: (process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX || 100,
  message: {
    status: 429,
    message: "Too many requests. Please try again later."
  }
});

module.exports = apiLimiter;
