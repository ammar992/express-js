import express from 'express';
import web from './routes/web';
const { join } = require('path');


const app = express();
const PORT = 5000;
app.use('/',web);
app.set('views',"./views");

app.set('view engine','ejs');


app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})