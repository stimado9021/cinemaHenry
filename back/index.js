const dbConfig = require('./src/config/dbConfig.js');
const app = require('./src/server.js')
const PORT = 3000;
//  coneccion base de datos mongodb
const startBD = async () => {
    try {
      await  dbConfig()
        app.listen(PORT, ()=>{
            console.log(`servidor escuchando en el puerto http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
   
}

startBD()

