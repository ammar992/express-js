const express = require('express');
const router = express.Router();
const {homeController} = require('../controller/homeController');
const {aboutController} = require('../controller/AboutController');



router.get('/',homeController);
router.get('/about',aboutController);



module.exports = router;