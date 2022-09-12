const {join} = require("path")

const Home = (req,res)=>{
    res.sendFile(join(process.cwd(),'view','index.html'))
}

module.exports = Home;