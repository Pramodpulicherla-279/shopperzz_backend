// src/controllers/product.controller.js
const db = require('../config/db'); // Import the database connection

//get all products
exports.getAllProducts = async (req, res) => {
  try {
    // Your database tables are ready, so we query the 'products' table
    const [rows] = await db.query("SELECT * FROM products");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

//get demanded products
exports.getDemandedProducts = async (req, res) => {
  try {
    // Your database tables are ready, so we query the 'products' table
    const [rows] = await db.query("SELECT * FROM products WHERE demanded = 1 ");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
