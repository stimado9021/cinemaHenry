const express = require('express');
const { postUsuario, getUsuario, putUsuario } = require('../controllers/controladorUsuario');

const routerUsuario = express.Router();


 routerUsuario.post('/usuario',postUsuario)
 routerUsuario.get('/usuario',getUsuario)
 routerUsuario.put('/usuario',putUsuario)

module.exports = routerUsuario;