const postUsuario = (req,res)=>{
    res.send("POST a la ruta '/Usuario'")
}

const getUsuario = (req,res)=>{
    res.send("GET a la ruta '/Usuario'")
}

const putUsuario = (req,res)=>{
    res.send("PUT a la ruta '/Usuario'")
}


module.exports = {
    postUsuario,getUsuario,putUsuario
}