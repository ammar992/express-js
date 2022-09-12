const express =  require('express');
const router = express.Router();
const { HomeController } = require('../controller/homeController')
const { AboutController } = require('../controller/aboutController')

router.get('/',HomeController);
router.get('/about',AboutController);



module.exports = router;