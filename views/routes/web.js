
const express = require('express');
const router = express.Router();
const { Home } = require('../controllers/homeController');
const { About } = require('../controllers/aboutController')


router.get('/',Home)
router.get('/about',About)

module.exports = router;