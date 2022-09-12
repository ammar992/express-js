const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


router.get('/',userController.home);
router.get('/registration',userController.register);
router.post('/registration',userController.userDoc);
router.get('/login',userController.login)
router.post('/login',userController.verifyLogin)



module.exports = router;
