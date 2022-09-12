const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const web = require('./routes/web')

// app.get('/',(req,res)=>{
//     res.send("Serer working")
// })
app.use('/',web)

app.listen(PORT,()=>{
    console.log(`serve is working http://localhost:${PORT}`)
})
