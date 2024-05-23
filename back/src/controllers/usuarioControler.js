const usuarioControler =(req,res)=>{
    res.send('enviando con post desde el controlador usuario')
}
const getUsuarioControler =(req,res)=>{
    res.send('enviando con get desde el controlador usuario')
}

module.exports = {
    usuarioControler,
    getUsuarioControler
}