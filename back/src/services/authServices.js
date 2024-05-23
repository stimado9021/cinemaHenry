
const BBDD = {
    usuario:"homero",
    password:"1234",
}

const authServices = {

     verCredenciales : (usuario,password)=>{
            return usuario===BBDD.usuario && password===BBDD.password;
    },

     generarToken : (usuario)=>{
        const token="TokenGenerado";
        return token;
    }        
}

module.exports =  authServices