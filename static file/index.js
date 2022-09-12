const express = require('express');
const app = express();
const PORT = 8000;
const Homepage = require('./routes/web');
const {join} = require('path');


app.use(express.static(join(process.cwd(),'public')));
app.use('/',Homepage);


app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})


