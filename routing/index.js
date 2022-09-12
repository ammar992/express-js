
import express from 'express';


const PORT = process.env.PORT || 8000;
const app = express();


// app.get('/',(req,res)=>{
//     res.send("Get method")
// })

// app.get('/about',(req,res)=>{
//     res.send("About page")
// })

// app.all('*',(req,res)=>{
//     res.send("Page not found")
// })



////////////// Regular expreesion ///////////


// app.get(/a/,(req,res)=>{
//     res.send("This is a")
// })

/////////////// one call back //////////////

// app.get('/call1',(req,res)=>{
//     res.send("First call back")
// })



/////////////// More than one call back //////////////

// app.get('/call2',(req,res,next)=>{
//     console.log("First call");
//     next();
// },(req,res)=>{
//     res.send("More than two call back");
//     console.log("second call")
// }
// )

/////////////////////////////// Array of call back //////////////////////////


// const cb1 = (req,res,next)=>{
//     console.log("first call");
//     next();
// }
// const cb2 = (req,res,next)=>{
//     console.log("second call");
//     next();
// }
// const cb3 = (req,res)=>{
//     res.send("Array of an call back")
// }
 
// app.get('/cbexample3',[cb1,cb2,cb3])


///////////// Combination of independent and array of call back function //////////////////////



// const cb1 = (req,res,next)=>{
//     console.log("First call back");
//     next();
// }
// const cb2 = (req,res,next)=>{
//     console.log("Second call back");
//     next();
// }

// app.get('/cbexample4',[cb1,cb2],(req,res,next)=>{
//     console.log("third call back");
//     next();
// },(req,res)=>{
//     res.send("Combination of independent and array of call back function");
//     console.log("Fourth call back");
// }
// )



////////////////////////// chain route call back //////////////////////





// app.route('/student')
// .all((req,res,next)=>{
//     console.log("Run for all http method first");
//     next();
// })
// .get((req,res)=>{
//     res.send("All students");
// })
// .post((req,res)=>{
//     res.send("Create Student")
// })
// .put((req,res)=>{
//     res.send("Update student")
// })
// .delete((req,res)=>{
//     res.send("Delete student")
// })




// app.route('/teacher')
// .all((req,res,next)=>{
//     console.log("Run for all http method first")
//     next();
// })
// .get((req,res)=>{
//     res.send("All teacher");
// })
// .post((req,res)=>{
//     res.send("Teacher created")
// })
// .put((req,res)=>{
//     res.send("Teacher updated")
// })
// .delete((req,res)=>{
//     res.send("Teacher deleted")
// })





app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})