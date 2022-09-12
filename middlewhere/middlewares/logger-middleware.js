var mylogger = (req,res,next)=>
{
    console.log("logged");
    next();
}

module.exports = mylogger;