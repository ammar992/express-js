const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const student = require('./routes/students');

app.use('/student',student)



app.listen(PORT,()=>{
    console.log(`server is woking at http://localhost:${PORT}`)
})



