function validarDatos(req, res, next) {
    const { title, year, director, duration, genre, rate, poster, description } = req.body;
  
    if (!title || !year || !director || !duration || !genre || !rate || !poster || !description) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
    }
  
    next();
  }
  
  module.exports = validarDatos;