const express =  require('express');
const student = require('./routes/students');
const teacher = require('./routes/teacher')


const app = express();
const PORT = process.env.PORT || 8000;


app.use('/student',student)
app.use('/teacher',teacher)



app.listen(PORT,()=>{
    console.log(`SErver is wroking at http://localhost:${PORT}`)
})

