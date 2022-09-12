const express =require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ConnectDB = require('./db/connectiondb');
const DATABASE_URL = "mongodb://localhost:27017/schooldb";

app.get('/',(req,res)=>{
    res.send("Working");
})

ConnectDB(DATABASE_URL);
app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})