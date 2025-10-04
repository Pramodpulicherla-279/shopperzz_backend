const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth.controller');

// Define the login route
router.post('/login', authController.login);

// You can add a registration route here later
// router.post('/register', authController.register);

module.exports = router;
