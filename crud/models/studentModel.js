const mongoose = require('mongoose');


///// Define schema ///////////


const studentSchema = mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=>{v>=5000}}
})



/// Model ///

const studentModel = mongoose.model("student",studentSchema);


module.exports = studentModel;