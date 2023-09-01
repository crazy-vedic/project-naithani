const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:pass@cluster0.tjfctuy.mongodb.net/project-Naithani?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log(`Connected to database cluster0`);
    //Router.listen(PORT, function() {console.log(`Server is running on port ${PORT}`)});
  }).catch((err) => {console.log(err);});

// Define a Product schema and model
const ProductSchema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Product = mongoose.model('Products', ProductSchema);

app.use(cors());

// Endpoint to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(req.url);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.use('/imgs', express.static(path.join(__dirname, 'src','components','imgs')));



app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
