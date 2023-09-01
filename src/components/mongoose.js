require('dotenv').config();
const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connected to database naithanis`);
}).catch((err) => {
  console.log(err);
});

const dbConnection2 = mongoose.connection;

module.exports = dbConnection2;
