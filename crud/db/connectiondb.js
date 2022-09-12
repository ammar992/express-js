const mongoose = require('mongoose');



const DB_OPTIONS = {
    dbName : 'school'
}

const connectDB = async (DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connected seccussfully...")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;