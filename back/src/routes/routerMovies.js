const express = require('express');
const {  getMovies } = require('../controllers/controladorMovies');

const routerMovies = express.Router();

 routerMovies.get('/movies',getMovies)
//  routerMovies.post('/movies',postMovies)
//  routerMovies.put('/movies',putMovies)

module.exports = routerMovies;