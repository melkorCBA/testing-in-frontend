const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  name: {
    type: String,
  },
  shippingAddress: {
    type: String,
  },
});

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
