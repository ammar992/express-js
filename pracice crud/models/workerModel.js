


const mongoose = require('mongoose');


///// Define schema ///////////


const workerSchema = mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=>{v>=5000}}
})



/// Model ///

const workerModel = mongoose.model("student",workerSchema);


module.exports = workerModel;













// const mongoose = require("mongoose");



// const workerSchema = mongoose.Schema({
//     name:{type:String,required:true,trim:true},
//     age:{type:String,required:true,trim:true},
//     Salary:{type:mongoose.Decimal128,required:true,trim:true}
// })


// const workerModel = mongoose.model('Worker',workerSchema);


// module.exports = workerModel;

