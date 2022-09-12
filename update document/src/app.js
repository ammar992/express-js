import express from 'express';
import ConnectDB from './db/connectdb';
import {multDoc} from './models/student';



const app = express();
const PORT = process.env.PORT || 8000;
const DATABASE_URL = "mongodb://localhost:27017";



app.get('/',(req,res)=>{
    res.send("Hello world");
})


ConnectDB(DATABASE_URL);
multDoc('23')
app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})