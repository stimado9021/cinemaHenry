const express =require('express');
const cors = require("cors");
const routerUsuario = require('../routes/routerUsuario');
const routerRaiz = require('../routes/routerRaiz');
const authRouter = require('../routes/authRouter');
const routerMovies = require('../routes/routerMovies');
const app = express()
const morgan = require('morgan');


app.use(cors())
app.use('/',morgan("dev"))
app.use(express.json())


app.use("/",authRouter)
app.use('/',routerRaiz)
app.use('/',routerUsuario)
app.use('/',routerMovies)


module.exports= app;