 const mongoose = require("mongoose");



const DB_OPTION = {
    dbName:"Worker"
}


const connectDB = async (DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL,DB_OPTION);
        console.log("Connected successfully....")
    }
     catch (error) {
        console.log(error)
    }
}



module.exports = connectDB;
