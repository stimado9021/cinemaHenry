const Movie = require('../models/movieModels'); 

module.exports =  {
    getMovies:async ()=>{
        const allMovies = await Movie.find()
        console.log(allMovies)
        return allMovies
    }
}