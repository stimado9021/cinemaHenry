const {getMovies} =  require('../services/moviesServices')

module.exports = {
    getMovies: async (req,res)=>{
       
        try {
            const movies =await getMovies()
            console.log(movies)
            res
            .status(200)
            .json(movies)
        } catch (error) {
            res
            .status(500)
            .json({
                mensaje:'error al obtener datos',
                error:error.mensaje
            })
            
        }
    }
}
