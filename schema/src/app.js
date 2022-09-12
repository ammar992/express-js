import express from 'express';
import mongoose from 'mongoose';
import connect from './db/connectdb';
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASR_URL = "mongodb://localhost:27017";

// import './models/Student';

// const express = require('express');
// const { mongo, connect } = require('mongoose');
// const ConnectDB = require('./db/connectdb');
// const  models =require("./models/Student");





app.get('/',(req,res)=>{
    res.send("Server is working");
})

// ConnectDB(DATABASR_URL);


app.listen(PORT,()=>{
    console.log(`Server is working at http://localhost:${PORT}`)
})