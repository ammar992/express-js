import express from 'express';
import ConnectDB from './db/connectdb';
import {ManyDoc} from './models/student';

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = "mongodb://localhost:27017";


app.get('/',(req,res)=>{
    res.send("Server is working")
})


ConnectDB(DATABASE_URL);
ManyDoc(27);
app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})