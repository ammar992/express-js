const userModel = require('../model/user');
const bcrypt = require('bcrypt');


class userController {
    static home = (req,res)=>{
        res.render('index');
    }
    static register = (req,res)=>{
        res.render('registration');
    }
    static userDoc =async (req,res)=>{
        const hashPassword = await bcrypt.hash(req.body.password,10);
        try {
        const {name,email} = req.body;
        const doc = new userModel({
            name:name,
            email:email,
            password:hashPassword
        })

        const result = doc.save();
        res.redirect('/login');
      } catch (error) {
        console.log(error)
      }
    }

    static login = (req,res)=>{
        res.render('login')
    }
    static verifyLogin =async (req,res)=>{
        try {
            const {email,password} = req.body;
            const result = await userModel.findOne({email:email});

            if(result != null){
                const isMatch =await bcrypt.compare(password,result.password);
                // console.log(isMatch)
                if(result.email==email && isMatch){
                    res.send(`Dashboard ${result}`)
                }
                else{
                    res.send("Invalid email or password");
                }
            }
            else{
                res.send("You are not registered");
            }
            
            // console.log(result);
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = userController;



// try {
//     console.log("Created doc post method");
//     const {name,email,password} = req.body;
//     console.log(req.body);
//     const doc = new userModel({
//         name:name,
//         email:email,
//         password:password
//     })
//    const result =  await doc.save();
//    console.log(result)
//    res.redirect("/")
// } 
// catch (error) {
//     console.log(error)
// }