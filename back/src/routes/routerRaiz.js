const express =require('express');
const controladorRaiz = require('../controllers/controladorRaiz')
const routerRaiz = express.Router();

routerRaiz.get('/',controladorRaiz)

module.exports = routerRaiz;



