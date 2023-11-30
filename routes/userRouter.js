// IMPORTS
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// REQUISITIONS
router.post('/register', userController.register);
router.post('/login', userController.login);

// EXPORT
module.exports = router;