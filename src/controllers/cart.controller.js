const db = require("../config/db"); // Import the database connection

//get all products
exports.getCartProducts = async (req, res) => {
  try {
    // Your database tables are ready, so we query the 'products' table
    const [rows] = await db.query(`SELECT 
    c.user_id AS user_id, p.name, p.price, p.mainImageUrl, c.quantity
    FROM cart c
    JOIN products p
    ON c.id = p.id `);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
