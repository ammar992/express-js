const { join } = require('path');


const AboutController = (req,res)=>{
    res.render('about')
}



module.exports = { AboutController }


