const express = require('express');
const connectDB = require('./db/connectdb');
const web = require('./routes/web');
const {join} = require('path');
const { url } = require('inspector');
const { urlencoded } = require('express');
const bp = require('body-parser')



const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = 'mongodb://localhost:27017';

app.use(bp.json())  
app.set('view engine','ejs');
// app.use(express.static(join(process.cwd(),'public')))

app.use('/worker',express.static(join(process.cwd(),"public")));

app.use('/worker',web);


app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send("Working")
})

// const jsonParser = bodyParser.json()

app.use(express.json());

connectDB(DATABASE_URL)

app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})