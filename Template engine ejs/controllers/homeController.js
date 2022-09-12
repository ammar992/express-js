const { join } = require('path');
const data = {name:"Ammar",id:11,document:"Home"}
const homeController = (req,res)=>{
    res.render('index',data);

}

module.exports = { homeController };

