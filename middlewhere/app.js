const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const web = require('./routes/web');
const {join} =require('path');
const mylogger = require('./middlewares/logger-middleware');
const student = require('./routes/student');



// app.use('/about',mylogger);
app.use(student);
app.use(web);
app.use(express.static(join(process.cwd(),'public')))
app.set('view engine','ejs');

app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})
