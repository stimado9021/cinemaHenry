module.exports = {
    mode:"development",
    entry:{
        index:"./scripts/index.js",
        creaFilm:"./scripts/creaFilm.js",
    },
    output:{
        path:__dirname + "/browser",
        filename:"[name].js"
    }
}