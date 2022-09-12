import express from 'express';
 import studentController from '../controller/studentController';
// const express = require('express');
// const studentController = require('../controller/studentController')


const router = express.Router();


router.get('/',studentController);


export default router;