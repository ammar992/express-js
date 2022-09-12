import mongoose from "mongoose";



const DB_OPTION = {
    dbName : 'schooldb'
}

const ConnectDB =async (DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL,DB_OPTION);
        console.log("Connected successfully");
    } catch (error) {
        console.log(error)
    }
}
export default ConnectDB;