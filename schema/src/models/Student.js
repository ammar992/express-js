
// // const mongoose = require('mongoose');
// import mongoose from "mongoose";


// //////////Defining schema //////


// const studentSchema = new mongoose.Schema({
//     name:{type:String,required:true,trim:true},
//     age:{type:Number,required:true,min:18,max:45},
//     fees:{type:mongoose.Decimal128,required:true,validate:(v)=>{v>=50000}},
//     hobbies:{type:Array},
//     isActive : {type:Boolean},
//     Comments :[{value:{type:String},publish:{type:Data,default:Date.now }}],
//     join:{type:Date,default:Date.now}

// })


// ///////Compiling schema /////

// const studentModel = mongoose.model('student',studentSchema)


