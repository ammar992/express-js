class StudentController{
    static set_cookie = (req,res)=>{
        res.cookie('username','Ammar',{maxAge:10000});
        res.send("Cookie set...");
    }
    static get_cookie = (req,res)=>{
        res.send("Cookie get...");
        console.log(req.cookies);
        }
    static delete_cookie = (req,res)=>{
        res.clearCookie('username');
        res.send("Cookie deleted...");
    }
}

export default StudentController;