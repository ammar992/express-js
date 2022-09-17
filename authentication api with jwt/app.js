const express  = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/connectdb');
// const DATABASE_URL = process.env.DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const userRoutes = require('./routes/userRoutes');



dotenv.config();

console.log(process.env.DATABASE_URL)
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{ 
    res.send("WORKING properly")
})



/// Json (for api)

app.use(express.json());

app.use(cors());


app.use('/api/user',userRoutes)

connectDB(DATABASE_URL);

app.listen(PORT,()=>{
    console.log(`server is working at http://localhost:${PORT}`)
})