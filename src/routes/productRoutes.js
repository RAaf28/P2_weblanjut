const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

console.log('getProducts type in routes:', typeof getProducts);
router.get('/products', getProducts);

module.exports = router;
