const express = require('express');
const movies = require('../controllers/movies');
const validarDatos = require('../middleware/validarDatos');
const { getAllMovies, createMovie, getMovie } = require('../controllers/movies');
const routerMovie = express.Router();
routerMovie.post('/', validarDatos,movies.createMovie);
routerMovie.get("/",getAllMovies)
routerMovie.post('/', createMovie)
routerMovie.get('/:id', getMovie)


module.exports =  routerMovie

