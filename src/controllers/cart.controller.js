const db = require("../config/db"); // Import the database connection

//get all products
exports.getCartProducts = async (req, res) => {
  try {
    // Your database tables are ready, so we query the 'products' table
    if (!req.user) {
      return res.status(401).json({ message: "Authentication required." });
    }
    const userId = req.user.id;
    const [items] = await db.query(`
      SELECT 
        p.id as id, 
        p.name, 
        p.price, 
        p.mainImageUrl, 
        c.quantity
      FROM cart c
      JOIN products p ON c.id = p.id
      WHERE c.user_id = ?`,
      [userId]
    );
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Add this new function to handle adding products to the cart
exports.addToCart = async (req, res) => {
  try {
    // console.log('Started add to cart post API');

    const userId = req.user.id;
    // console.log("Logged in User Id is:", userId);

    let { productId, quantity } = req.body;
    // console.log(req.body)

    // Validate the input to make sure we have what we need.
    if (!productId || !quantity) {
      res.status(400)
      .json({message: "Product ID and quantity are required!"})
    }

    // 1. CHECK if the item already exists in the user's cart.
    const [existingItems] = await db.query(
      "SELECT * FROM cart WHERE user_id = ? AND id = ?", // Assuming your product column is named 'product_id'
      [userId, productId]
    );

    console.log(existingItems);

    res.send(req.body);
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Failed to add product to cart" });
  }
};
