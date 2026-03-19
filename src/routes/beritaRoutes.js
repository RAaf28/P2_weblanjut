const express = require('express');
const router = express.Router();
const { getBerita } = require('../controllers/beritaController');

console.log('getBerita type in routes:', typeof getBerita);
router.get('/berita', getBerita);

module.exports = router;
