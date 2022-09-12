import express from 'express';
import word from './word';
const app = express();
const PORT = process.env.PORT || 3000;



console.log(word);
app.get('/',(req,res)=>{
    res.send("Hello beautiful world")
})

app.listen(PORT,()=>{
    console.log(`server is wokring at http://localhost:${PORT}`)
})