// src/api/routes/product.routes.js
const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product.controller');
// const cartController = require('../../controllers/cart.controller');
// const { authenticateToken } = require('../../midddleware/auth.middleware'); 

// Define the route to get all products
// GET /api/v1/products/
router.get('/products', productController.getAllProducts);
router.get('/demanded-products', productController.getDemandedProducts);
// router.get('/cart-products', authenticateToken, cartController.getCartProducts)

module.exports = router;