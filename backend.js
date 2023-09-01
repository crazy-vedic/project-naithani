// backend/routes.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const router = express.Router();

const dbConnection2 = require('./src/components/mongoose'); // Use the correct connection

// Define a Product schema and model
const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Product = dbConnection2.model('Products', ProductSchema); // Use the correct connection

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
router.use('/imgs', express.static(path.join(__dirname, '../../components/src/components/imgs'))); // Adjust the path

module.exports = router;
