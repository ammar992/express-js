const express = require('express');
const { allStudent, deleteStudent } = require('../controller/studentController');
const router = express.Router();

router.get('/all',allStudent);
router.get('/delete/:id',deleteStudent)




module.exports = router;





