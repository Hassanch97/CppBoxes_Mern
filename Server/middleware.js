const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const express = require('express');

// Security Middlewares
module.exports = (app) => {
  // 1. Secure HTTP headers
  app.use(helmet());
// hdshjdhj
  // 2. Prevent XSS (Cross-Site Scripting)
//   app.use(xssClean());

  // 3. Prevent HTTP Parameter Pollution
  app.use(hpp());

  // 4. Enable CORS (change origin for production)
  app.use(cors({
    origin: ['http://localhost'], // update for your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: false
  }));

  // 5. Rate Limiting (avoid brute force / DoS)
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  });
  app.use(limiter);

  // 6. JSON Body Parser (with limit to avoid huge payloads)
  app.use(express.json({ limit: '10kb' }));
};
