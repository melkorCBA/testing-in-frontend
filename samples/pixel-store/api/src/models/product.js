const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema);
