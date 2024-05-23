const authServices = require('../services/authServices');
const authControler =(req,res)=>{
    const{ usuario,password} = req.body
 
   if(authServices.verCredenciales(usuario, password)) {
        const token = authServices.generarToken(usuario)
        res.status(200).json({mensaje:"login exitoso",token})    
   }else{
    res.status(401).json({mensaje:"credenciales incorrectas"});
   }
}

module.exports = authControler;