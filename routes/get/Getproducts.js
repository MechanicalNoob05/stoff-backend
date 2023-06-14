const express = require('express');
const Product = require('../../models/product');
const route = express.Router();
route.post('/', async (req, res) => {
  try {
    const product = await Product.find().populate("store")
    res.status(200).json({product})
  } catch (err) {
    res.json({ errors: err, message: err.message })
  }
})
module.exports = route