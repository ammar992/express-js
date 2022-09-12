import express from 'express';
import web from './route/web';
import session from 'express-session';

const app =express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Server is working");
})

app.use(session({
    name:'AmmarGreek',
    secret:'123456',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:200000}
}))

app.use('/',web);

app.listen(PORT,()=>{
    console.log(`Server is working at http://localhost:${PORT}`)
})