const express = require('express');
const router = express.Router();
const mylogger = require('../middlewares/logger-middleware');

router.use(mylogger);
const student = require('../controller/studentController');
router.get('/student',student);


module.exports = router;