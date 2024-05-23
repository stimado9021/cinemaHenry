const axios = require('axios');
const Movie  = require('../models/Movies')   


const getMovieByIdService = async (id) => {
    try {
        const idMovie = await Movie.findById(id)

        return idMovie;
    } catch (error) {
        throw Error('No se encontró el usuario')
    }
}

const moviesFilms = async ()=> {
    try {
    // const pelis = await axios('https://students-api.up.railway.app/movies')
    const allMovies = await Movie.find()     
        return allMovies
    } catch (error) {
        console.log(error.message);
    }
}

const postMoviesService = async ({title,year,director,duration,genre,rate,poster,description}) => {
    try {
        const newMovie = await Movie.create({title,year,director,duration,genre,rate,poster,description})
        return newMovie
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = {
    moviesFilms,
    postMoviesService,
    getMovieByIdService
}


