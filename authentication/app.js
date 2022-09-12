const { urlencoded } = require("express");
const express = require("express");
const connectDB = require('./db/connectdb');
const web = require('./routes/web');
const bp = require('body-parser')



const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = "mongodb://localhost:27017";

// app.get('/',(req,res)=>{
    //     res.send("Server is working");
    // })
    
    app.use(bp.json())
    app.use(bp.urlencoded({ extended: true }))

app.set('view engine','ejs');
app.use(web);
app.use(urlencoded({extended:true}));
connectDB(DATABASE_URL)


app.listen(PORT,()=>{


    
    console.log(`server is wokring at http://localhost:${PORT}`)
})
