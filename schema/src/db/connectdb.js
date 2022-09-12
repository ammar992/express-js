// // const mongoose = require('mongoose');
// // const { default: mongoose } = require("mongoose");



import mongoose from "mongoose";

const DB_OPTION = {
    dbName :"schooldb"
  }

const ConnectDB = async (DATABASE_URL,DB_OPTION)=>{
 try {
   await mongoose.connect(DATABASE_URL);
   console.log("Connected successfully");
 } catch (error) {
    console.log(error)
 }
}
// export default  {ConnectDB}