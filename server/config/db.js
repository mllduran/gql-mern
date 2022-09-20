const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log('MONGODB CONNECTED')
}

module.exports = connectDB;