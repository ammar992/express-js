const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workerController');


// router.get('/',workerController.home);
router.get('/',workerController.reteriveDoc)
router.post('/',workerController.createDoc);
router.get('/edit',workerController.edit);


module.exports = router;