// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');

// Define the port
const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Import routes
const productRoutes = require('./src/api/routes/product.routes');
const authRoutes = require('./src/api/routes/auth.routes')

// Mount routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/auth', authRoutes);

// A simple test route to make sure the server is working
app.get('/', (req, res) => {
  res.send(`Shopperzz API is running... with PORT: ${PORT}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

