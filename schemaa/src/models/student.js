import mongoose from "mongoose";


////////////////////// Define Schema ////////////////////

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:45},
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=>{v>=50000}},
    hobbies:{type:Array},
    isActive:{type:Boolean},
    Comments:[{value:{type:String},publish:{type:Date,default:Date.now}}],
    join:{type:Date,default:Date.now}

})
////////////// compiling schema //////////////////

const studentModel = mongoose.model('student',studentSchema);

//////////// create Document //////

const createDoc = async ()=>{
    try {

        ////////////// creating new document ///////
        const studentDoc = new studentModel({
            name:"Saim",
            age:23,
            fees:65000,
            hobbies:['dancing','reading'],
            isActive:true,
            Comments:[{value:'This is good mongoose'}]
        })

      //////////////// saving document ////////////
        const result = await studentDoc.save();
        console.log(result);

    } catch (error) {
        console.log(error)
    }
}

export default createDoc;