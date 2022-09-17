const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  static userRegistration = async (req, res) => {
    const { name, email, password, confirm_password, tc } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.send({ status: 'failed', message: 'User already registered' });
    } else {
      if (name && email && password && confirm_password && tc) {
        if (password === confirm_password) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const Doc = new userModel({
              name: name,
              email: email,
              password: hashPassword,
              tc: tc,
            });
            await Doc.save();
            const save_user = await userModel.find({ email: email });
            const token = jwt.sign(
              { userID: save_user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: '5d' }
            );

            // Generate JWT Token

            res.send({
              status: 'success',
              message: 'Registration Success',
              token: token,
            });
            // res.send("Regsitraion completed")
          } catch (error) {
            res.send({ status: 'failed', message: 'User unable to register' });
          }
        } else {
          res.send({
            status: 'failed',
            message: 'Password and confirm password does not match',
          });
        }
      } else {
        res.send('All fields are required');
      }
    }
  };


  ///////////////////////////// User login ////////////////////////

  

  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await userModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            // Generate JWT Token
            const token = jwt.sign(
              { userID: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: '5d' }
            );
            res.send({
              status: 'success',
              message: 'Login Success',
              token: token,
            });
          } else {
            res.send({
              status: 'failed',
              message: 'Email or Password is not Valid',
            });
          }
        } else {
          res.send({
            status: 'failed',
            message: 'You are not a Registered User',
          });
        }
      } else {
        res.send({ status: 'failed', message: 'All Fields are Required' });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: 'failed', message: 'Unable to Login' });
    }
  };

  /////////////////////// Change Password //////////////////////////

  static changePassword = async (req, res) => {
    const { password, confirm_password } = req.body;
    if (password && confirm_password) {
      if (password === confirm_password) {
        const salt = await bcrypt.genSalt(10);
        const newHashPassword = await bcrypt.hash(password, salt);
        await userModel.findByIdAndUpdate(req.user._id, {
          $set: { password: newHashPassword },
        });
        res.send({ status: 'success', message: 'Password changed' });
      } else {
        res.send({
          status: 'failed',
          message: "Password and confirm_password doesn't",
        });
      }
    } else {
      res.send({ status: 'faild', message: 'All fields required' });
    }
  };

  static loggedUser = (req, res) => {
    res.send({ user: req.user });
  };

  static resetPassword = async (req, res) => {
    const { email } = req.body;
    if (email) {
      const user = await userModel.findOne({ email: email });
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userID: user._id }, secret, {
          expiresIn: '15m',
        });
        const link = `http://localhost:3000/api/user/reset/${user._id}/${token}`;
        console.log(link);
        res.send({
          status: 'success',
          message:
            'Passwor reset email has been sent please check your email...',
        });
      } else {
        res.send({ status: 'failed', message: "Email doesn't exists" });
      }
    } else {
      res.send({ status: 'failed', message: 'Email field required' });
    }
  };


/////////////////////////////////// Change user password /////////////////




  static userPasswordReset = async (req, res) => {
    const { passwor, confirm_password } = req.body;
    const { token, id } = req.params;
    const user = await userModel.findById(id);
    const new_secret = user._id + process.env.JWT_SECRET_KEY;
    try {
      jwt.verify(token,new_secret)
      if(password && confirm_password){
        if(password === confirm_password){
          const salt = await bcrypt.genSalt(10);
          const newHashPassword = await bcrypt.hash(passwor,salt);
          await userModel.findByIdAndUpdate(user._id,{$set:{password:newHashPassword}})
          res.send({status:"failed",message:"Password reset successfully"})
        }
        else{
          res.send({status:"failed",message:"Password and confirm password doesn't match"})
        }
      }
      else{
        res.send({status:"failed",message:"All fileds required"})
      }
    } catch (error) {
      res.send({status:"failed",message:"Invalid token"})
    }
  };
}

module.exports = UserController;
