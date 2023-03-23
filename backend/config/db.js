const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {family: 4});
    console.log(`MongoDB Connectd: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(error.message.red);
    process.exit(1);
  }
}

module.exports = connectDB