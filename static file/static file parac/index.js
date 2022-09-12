const express = require('express');
const app = express();
const web = require('./routes/web')
const PORT = process.env.PORT || 8000;
const { join } = require('path')
 


app.set('view engine','ejs')
app.use(express.static(join(process.cwd(),'public')))

app.use('/',web);


app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})