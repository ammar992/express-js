const {join} = require('path');
const data = {document:"about"}
const aboutController = (req,res)=>{
    res.render('about',data)
}

module.exports = { aboutController };