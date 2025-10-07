const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/cart.controller');
const authenticateToken = require('../../middleware/auth.middleware'); // Make sure path is correct

// INCORRECT way that causes the error:
// router.get('/', authenticateToken, cartController); // cartController is an object, not a function

// CORRECT way:
router.get('/', authenticateToken, cartController.getCartProducts);

// Add this new route for adding items to the cart
router.post('/', authenticateToken, cartController.addToCart);

// Make sure you have other routes like add to cart as well
// router.post('/', authenticateToken, cartController.addToCart);

module.exports = router;