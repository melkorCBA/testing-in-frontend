const express = require("express");
const OrdersRouter = express.Router();
const Order = require("../models/order");
const Product = require("../models/product");

OrdersRouter.get("/", async (req, res) => {
  try {
    // Find the first order in the collection
    const firstOrder = await Order.findOne().populate({
      path: "products",
      populate: "product",
    });

    if (!firstOrder) {
      const order = new Order({
        products: [],
        name: "",
        shippingAddress: "",
      });
      await order.save();
      return res.status(200).json(order);
    }

    // Respond with order
    res.status(200).json(firstOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create an order
OrdersRouter.patch("/:orderId", async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.name = req.body.name;
    order.shippingAddress = req.body.shippingAddress;
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

OrdersRouter.post("/:orderId/add-product", async (req, res) => {
  const { orderId } = req.params;
  const { productId, quantity } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const idx = order.products.findIndex((p) => p.product.equals(productId));
    if (idx < 0) {
      order.products.push({ product: productId, quantity });

      // Save the updated order
      const updatedOrder = await order.save();

      return res.status(200).json(updatedOrder);
    }
    const qt = order.products[idx].quantity;
    order.products[idx].quantity = qt + quantity;
    const updatedOrder = await order.save();

    return res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

OrdersRouter.delete("/:orderId", async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Clear the order data (set the products array to an empty array)
    order.products = [];
    order.name = "";
    order.shippingAddress = "";

    // Save the updated order
    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = OrdersRouter;
