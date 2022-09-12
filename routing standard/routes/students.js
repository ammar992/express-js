
const express = require('express');
const router = express.Router();
const {allStudent,deleteStudent} = require('../controller/studentController')

router.get('/all',allStudent)

router.get('/deleted',deleteStudent)


module.exports = router;

