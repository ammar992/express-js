import express from 'express';
import mongoose from 'mongoose';
import ConnectDB from './db/connectdb';
import createDoc from './models/student';

const app= express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = 'mongodb://localhost:27017';

 createDoc();
app.get('/',(req,res)=>{
    res.send("Server is working");
})

ConnectDB(DATABASE_URL);
app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})