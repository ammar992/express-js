const path = require('path');
const About = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','about.html'))
}


module.exports = {About};