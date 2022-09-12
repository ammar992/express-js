class studentController{
    static get_session_info = (req,res)=>{
        res.send("Session info....");
        console.log(req.session);
        console.log(req.session.id)
        console.log(req.session.cookie)
        console.log(req.session.cookie.maxAge)
        console.log(req.session.cookie.originalMaxAge)
    }

    static delete_session = (req,res)=>{
        req.session.destroy((req,res)=>{
            console.log(`session deleted... Cannot Access Session ${req.session.id}`)
        })
        res.send("Session deleted");
    }

    static regn_session = (req,res)=>{
        req.session.regenerate(()=>{
            console.log(`session regenerated....... new session id ${req.session.id}`)
        })
        res.send("Session generated")
    }

    static session_example = (req,res)=>{
        req.session.device = "Mobile";
        if(req.session.count){
            req.session.count++;
        }
        else{
            req.session.count = 1;
        }

        res.send(`Count ${req.session.count}`);
    }

    static get_session_data = (req,res)=>{
        if(req.session.device){
            res.send(`Device`)
        }
        else{

            res.send("device not found")
        }
    }

    
}
export default studentController;