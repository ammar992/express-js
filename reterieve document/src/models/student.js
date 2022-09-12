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

///////////////// Reterive all document /////////////

// const getAll = async ()=>{
//     const result = await studentModel.find();
//     // console.log(result);
//     result.forEach((item)=>{
//         console.log(item.name)
//         console.log(item.age)
//     })
// }

//////////////////// reterive all document with specific field ///////////////////

  
// const getAll = async ()=>{
        // const result = await studentModel.find().select('name age'); // includ
        // const result = await studentModel.find().select(['name','age']); // includ
        // const result = await studentModel.find().select({name:1,age:1}); // includ
        
            //   const result = await studentModel.find().select('-name -age'); // exclude
        // const result = await studentModel.find().select(['-name','-age']); // exclude
        // const result = await studentModel.find().select({name:0,age:0}); // exclude
        // const result = await studentModel.find({},'name age')
        // console.log(result)
    // }
    
///////////// get Single document //////////////////
    // const getSingleDoc = async ()=>{
    //     const result = await studentModel.findById('630f59ecdca5b45becd0ff7d');
    //     console.log(result.name,result.age,result.fees.toString())
    // }


    /////////////////// get single documennt with specific field ////////////


    // const getSingleDocSpec = async ()=>{
    //     const result = await studentModel.findById("630f59ecdca5b45becd0ff7d",'name age');
    //     console.log(result)
    // }


/////////////////////////// Reterive document by field ////////////////////////


// const getByField = async ()=>{
//     const result = await studentModel.find({name:"Ammar"})
//     console.log(result)
// }


/////////////////////////// Reterive document by field with specific field ////////////////////////

// const specificByField = async ()=>{
//     const result =await studentModel.find({name:"Ammar"}).select('name age fees')
//     console.log(result);

// }

//////////////////////////////// Reterive limited document ///////////////////

// const limitedDoc = async ()=>{
//     const result =await studentModel.find().limit(2);
//     console.log(result)
// }

//////////////////////////////// Reterive skip document ///////////////////

// const skipDoc = async ()=>{
//     const result = await studentModel.find().skip(1);
//     console.log(result)
// }


//////////////////////////////// count document ///////////////////


// const countDoc = async ()=>{
//     const result = await studentModel.find().countDocuments();
//     console.log(result)
// }

////////////////////////// sorting doc //////////////////////


// const sortDoc = async ()=>{
//     // const result =await studentModel.find().sort({age:1})
//     const result =await studentModel.find().sort({name:-1})
//     console.log(result)
// }



// const mixDoc = async ()=>{
//     const result = await studentModel.find({},{name:1,age:1},{limit:2,skip:1});
//     console.log(result);
// }

///////////////////////// Comparision /////////////////////

// const compDoc = async ()=>{
    // const result = await studentModel.find({age:{$gt:20}});
    // const result = await studentModel.find({age:{$gte:23}});
    // const result = await studentModel.find({age:{$lt:24}});
    // const result =  await studentModel.find({age:{$lte:25}})
    // const result = await studentModel.find({age:{$ne:23}})
    // const result = await studentModel.find({age:{$nin:[21,23]}})
    // const result = await studentModel.find({age:{$in:[21,23]}})
    // console.log(result)
// }

///////////////////////// Logical Query operator ////////////////////

// const logicalDoc = async ()=>{
//     //  const result = await studentModel.find({$and:[{age:23},{name:"Saim"}]});
//     // const result = await studentModel.find({$or:[{age:23},{age:25}]})
//     const result = await studentModel.find({$and:[{age:{$gt:20}},{name:"Ammar"}]})
//      console.log(result);
// }



export{logicalDoc}