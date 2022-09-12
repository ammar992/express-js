import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=>{v>=50000}},
    hobbies:{type:Array},
    isActive:{type:Boolean},
    Comments:[{value:{type:String},publish:{type:Date,default:Date.now}}],
    join:{type:Date,default:Date.now}

})


const studentModel = mongoose.model('student',studentSchema);

/////////////////////// Update doceument /////////////////////


// const updateDocument = async (id)=>{
//     try {
//         const result = await studentModel.findByIdAndUpdate(id,{name:"Ammar Siddiqui"},{returnDocument:'after'});
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }



//////////////// Update document by filter //////////////////////


// const updateOneDoc = async (id)=>{
//     try {
//         const result = await studentModel.updateOne({_id:id},{name:"Razeen"});
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
    
// }


////////////////////// Update document by age and upsert //////////////////

// const updateDoc = async (_name)=>{
//     const result = await studentModel.updateOne({name:_name},{age:18});
//     console.log(result);
// }


////////////////////////// Update more than one document ////////////////////

const multDoc = async (_age)=>{
    const result = await studentModel.updateMany({age:_age},{age:30})
    console.log(result);
}



export {multDoc}