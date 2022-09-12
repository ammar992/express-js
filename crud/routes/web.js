const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/',studentController.getAllDoc);
router.post('/',studentController.createDoc);
router.get('/edit/:id',studentController.editDoc);
router.post('/update/:id',studentController.updateDocById);
router.post('/delete/:id',studentController.deleteDoc);



module.exports = router;