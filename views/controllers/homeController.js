const path = require('path');
const Home = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','index.html'))
}



module.exports = {Home};