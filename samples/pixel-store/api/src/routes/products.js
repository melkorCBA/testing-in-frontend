const express = require("express");
const productsRouter = express.Router();
const Product = require("../models/product");

// Get a list of products
productsRouter.get("/", async (req, res) => {
  try {
    console.log("get products");
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = productsRouter;
