import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => {
      v >= 50000;
    },
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  Comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

const studentModel = mongoose.model('student', studentSchema);

/////////////////////////// Delete document by id /////////////////

// const deleteDocumet = async(id)=>{
//     try {
//         const result = await studentModel.find();
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

//////////////////////// deleted sigle document ///////////////////////

// const deleteSingleDoc =async(id) => {
//   try {
//     console.log(id)
//     const result =await studentModel.deleteOne({_id:id}); // you may give age
//     console.log(result);
//   } catch (error) {
//     console.log("error");
//   }
// };


/////////////////////// deleted Many document ////////////////////

// try {
//     const ManyDoc = async (_age)=>{
//         const result = await studentModel.deleteOne({age:_age});
//         console.log(result);
//     }    
// } catch (error) {
//     console.log(error)
// }

// const ManyDoc =async(_age) => {
//   try {
//     console.log(id)
//     const result =await studentModel.deleteMany({age:_age}); // you may give age
//     console.log(result);
//   } catch (error) {
//     console.log("error");
//   }
// };







export { ManyDoc };
