const mongoose = require('mongoose');



const DB_OPTIONS = {
    dbName:"AmmarShop"
}


const connectDB = async (DATABASE_URL)=>{
    try {
        mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;