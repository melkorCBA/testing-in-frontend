const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");
const seedProducts = require("./models/seeder");

mongoose
  .connect(
    "mongodb+srv://admin-pixel-store:admin-pixel-store@clusterpython.smfzx.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    seedProducts();
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/products", productsRouter);
    app.use("/orders", ordersRouter);
    app.listen(3000, () => {
      console.log("Server has started!");
    });
  });
