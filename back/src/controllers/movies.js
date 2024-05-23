const {moviesFilms,postMoviesService,getMovieByIdService} = require('../services/moviesServi')

const getAllMovies = async (req,res)=>{  
    try {
        const moviesExpect = await moviesFilms()
        res.status(200).json(moviesExpect)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


const createMovie = async (req, res) => {
    try {
     //const id=  req.params.id
      await  postMoviesService(req.body)
      res.status(201).json({message: "pelicula se ha creado exitosamente"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getMovie = async (req, res) => {
   
             try {                
                const { id } = req.params
                const movie =  await  getMovieByIdService(id)
                res.status(200).json(movie)
            } catch (error) {
                res.status(500).json({error:error.message})
            }
}

module.exports = {
    getAllMovies,
    createMovie,
    getMovie
}