import express from 'express';


const app = express();
const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("Server is working")
})


app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})