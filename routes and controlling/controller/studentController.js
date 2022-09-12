

const allStudent = (req,res)=>{
    res.send("All student")
}


const deleteStudent = (req,res)=>{
    const {id} = req.params;
    if(id == 10){
        res.send(`This is Ammar's id and it can't be deleted`)
    }
    else{
        res.send(`student deleted ${id}`)
    }
    
}

module.exports = {allStudent,deleteStudent}

