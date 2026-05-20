const express = require('express');
const { register, login, getProfile, adminLogin } = require('../controllers/authController');
const auth = require('../middleware/auth');
const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/admin-login', adminLogin);

// Protected routes
router.get('/profile', auth, getProfile);

module.exports = router;
