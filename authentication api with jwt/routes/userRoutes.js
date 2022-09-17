const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const checkUserAuth = require('../middlewares/auth-middleware');

//// Route Level Middileware ////

router.use('/changePassword',checkUserAuth);
router.use('/loggeduser',checkUserAuth);


/// public /////

router.post('/register',userController.userRegistration);
router.post('/login',userController.userLogin);
router.post('/resetpassword',userController.resetPassword);
router.post('/userPasswordReset/:id/:token',userController.userPasswordReset);


//// protected ////

router.post('/changePassword',userController.changePassword);
router.get('/loggeduser',userController.loggedUser)


module.exports = router;