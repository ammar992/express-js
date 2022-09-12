
const express =require('express');
const PORT = process.env.PORT || 8000;
const app = express();


// app.get('/productname/:id',(req,res)=>{
// const { id } = req.params;
// res.send(`The product id is ${id}`)

// })




// app.get('/product/order/:year/and/:month',(req,res)=>{
//     const { year,month } = req.params;
//     res.send(`${year} and ${month}`)
//  })

/////////////////////////////////////////////// with Rgex //////////////////////////////



// app.get('/productname/:id([0-9]{2})',(req,res)=>{
// const { id } = req.params;
// res.send(`The product id is ${id} deleted `)

// })


// app.get('/product/order/:year([0-9]{4})/and/:month',(req,res)=>{
//     const { year,month } = req.params;
//     res.send(`${year} and ${month}`)
//  })



// app.get('/:type(post|article)',(req,res)=>{
//     res.send("POst or articel")
// })
 
// app.param('id',(req,res,next,id)=>{
//     console.log(`ID: ${id}`)
//     next();
// })

// app.get('/user/:id',(req,res)=>{
//     console.log("This is the user id path")
//     res.send("Response OK")
// })


app.param(['id','page'],(req,res,next,value)=>{
    console.log(`Called only once ${value}`);
    next();
})

app.get('/user/:id/:page',(req,res,next)=>{
    console.log("THis is the user id path 1")
    next();
})

app.get('/user/:id/:page',(req,res)=>{
    console.log("This is the user id path 2")
    res.send("Response OK")
})






app.listen(PORT,()=>{
    console.log(`The server is working at http://localhost:${PORT}`)
})