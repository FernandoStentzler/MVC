const express = require('express');
const router = express.Router();
const homeHTML = require('../controllers/mainController')

router.get('/', homeHTML.home)
router.get('/about', homeHTML.about)

module.exports = router