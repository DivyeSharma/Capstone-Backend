require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGO_URI || process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
};
