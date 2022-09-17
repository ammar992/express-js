const workerModel = require('../models/workerModel');
class workerController{
    static edit = (req,res)=>{
        res.render('edit')
    }
    static createDoc =async (req,res)=>{
        try {
            console.log("Created doc post method");
            const {name,age,fees} = req.body;
            const doc =  workerModel({
                name:name,
                age:age,
            })
           const result =  await doc.save();
           res.redirect("/worker")
        } 
        catch (error) {
            console.log(error)
        }
    }
    static  reteriveDoc =async (req,res)=>{
        try {
            const result = await workerModel.find();
            res.render('index',{data:result});
        } catch (error) {
            console.log(error)
        }
    }
    static delete = (req,res)=>{

    }
    static updateDoc = (req,res)=>{

    }
}



module.exports = workerController;