const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/userController');
console.log('getUser type in routes:', typeof getUser);
router.get('/users', getUser);
module.exports = router;