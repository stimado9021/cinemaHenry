const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const routerMovie = require('./routes/movies.js')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use("/movies", routerMovie)
module.exports = app;