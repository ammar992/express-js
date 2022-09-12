const Homepage = require('../controllers/home');

const express = require('express');
const router = express.Router();


router.get('/',Homepage);



module.exports = router;