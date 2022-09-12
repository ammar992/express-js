import express from 'express';
import cookieParser from 'cookie-parser';
import web from './routes/web';


const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Server working seccussfully");
})
app.use('/',web);

app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})