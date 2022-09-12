const express = require("express");
const connectDB = require('./db/connectiondb');
const {join} = require('path');
const web = require('./routes/web');

const app = express();
const PORT = process.env.PORT || 4000; 
const DATABASE_URL = "mongodb://localhost:27017";



// app.get('/',(req,res)=>{
//     res.send("Hello");
// })


app.set('view engine','ejs')

 ///// Database connection /////
connectDB(DATABASE_URL);



app.use(express.urlencoded({extended:true}))

//// Static Files ///

app.use('/student',express.static(join(process.cwd(),"public")));
app.use('/student/edit',express.static(join(process.cwd(),"public")));



app.use('/student',web);



app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})