const studentModel = require('../models/studentModel');

class studentController {
    static createDoc =async (req,res)=>{
        try {
            console.log("Created doc post method");
            const {name,age,fees} = req.body;
            const doc = new studentModel({
                name:name,
                age:age,
                fees:fees
            })
           const result =  await doc.save();
           res.redirect("/student")
        } 
        catch (error) {
            console.log(error)
        }
    }
    static getAllDoc =async (req,res)=>{
        try {
            const result = await studentModel.find();
            res.render('index',{data:result});
        } catch (error) {
            console.log(error)
        }
    }
    static editDoc = async (req,res)=>{
        // console.log(req.params.id)
        try {
            const result = await studentModel.findById(req.params.id);
            res.render('edit',{data:result})
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    static updateDocById =async (req,res)=>{
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
    }
    static deleteDoc =async (req,res)=>{
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id);
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = studentController;