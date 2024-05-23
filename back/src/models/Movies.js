const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true,
        min:[1895]
    },
    director:String,
    duration:String,
    genre:[String],
    rate:Number,
    poster:String,
    description:String
})

const Movie=mongoose.model("Movie",movieSchema)

module.exports = Movie;