import express from 'express';
const PORT = process.env.PORT || 8000;

const app = express();
app.get('/',(req,res)=>{
    res.send("Hello wrold")
})


app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})


