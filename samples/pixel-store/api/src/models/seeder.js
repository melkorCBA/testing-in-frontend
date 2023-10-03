const mongoose = require("mongoose");
const Product = require("./product");

// Define an array of Pixel phone products (you can add more if needed)
const pixelPhones = [
  {
    name: "Google Pixel 6",
    SKU: "PIXEL6-001",
    price: 699,
    image: "pixel6.jpg",
  },
  {
    name: "Google Pixel 6 Pro",
    SKU: "PIXEL6PRO-001",
    price: 899,
    image: "pixel6pro.jpg",
  },
  {
    name: "Google Pixel 5a",
    SKU: "PIXEL5A-001",
    price: 449,
    image: "pixel5a.jpg",
  },
  {
    name: "Google Pixel 4a",
    SKU: "PIXEL4A-001",
    price: 349,
    image: "pixel4a.jpg",
  },
  {
    name: "Google Pixel 4 XL",
    SKU: "PIXEL4XL-001",
    price: 799,
    image: "pixel4xl.jpg",
  },
  {
    name: "Google Pixel 3a",
    SKU: "PIXEL3A-001",
    price: 399,
    image: "pixel3a.jpg",
  },
  {
    name: "Google Pixel 3",
    SKU: "PIXEL3-001",
    price: 499,
    image: "pixel3.jpg",
  },
  {
    name: "Google Pixel 2 XL",
    SKU: "PIXEL2XL-001",
    price: 599,
    image: "pixel2xl.jpg",
  },
  {
    name: "Google Pixel",
    SKU: "PIXEL-001",
    price: 399,
    image: "pixel.jpg",
  },
];

// Rest of the seeder code remains the same

// Function to seed the products
const seedProducts = async () => {
  console.log("seeding pixels");
  try {
    // Check if any products with the same name already exist
    for (const product of pixelPhones) {
      const existingProduct = await Product.findOne({ name: product.name });

      if (!existingProduct) {
        // Product doesn't exist, so create it
        const newProduct = new Product(product);
        await newProduct.save();
        console.log(`Created product: ${product.name}`);
      } else {
        // Product already exists, skip creating
        console.log(`Product already exists: ${product.name}`);
      }
    }

    console.log("Product seeding completed.");
  } catch (error) {
    console.error("Product seeding failed:", error);
  } finally {
    // Close the MongoDB connection
    //mongoose.connection.close();
  }
};

// Seed the products
module.exports = seedProducts;
