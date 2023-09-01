const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const router = express.Router();

// Connect to MongoDB
/*
mongoose.connect('mongodb+srv://admin:pass@cluster0.tjfctuy.mongodb.net/project-Naithani?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connected to database cluster0`);
}).catch((err) => {
  console.log(err);
});
*/
// Define a Product schema and model
const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Product = mongoose.model('Products', ProductSchema);

// Endpoint to get all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(req.url);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Serve static files (images) from the root directory
router.use('/imgs', express.static(path.join(__dirname, './project-Naithani', 'components', 'src','components','imgs')));

module.exports = router;
