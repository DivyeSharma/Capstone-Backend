const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error('✗ MongoDB connection error: MONGO_URI environment variable is not defined.');
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    return;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✓ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`✗ MongoDB connection error: ${error.message}`);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
