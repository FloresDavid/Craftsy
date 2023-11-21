const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

/* /profile */
router.get('/profile', usersController.profile)
/* /register */
router.get('/register', usersController.register)

module.exports = router;