const Movie = require('../models/movie.model');

exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json({
            message : "Consulta de peliculas",
            data: movies
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar peliculas",
            data: error
        });
    }
}

exports.getMoviesbyId = async (req, res) => {
    try{
        const movieId = req.params.movieId; //Acceder a los parametros

        const movie = await Movie.findById(movieId);
        return res.status(200).json({
            message : "Consultando pelicula por ID: " + movieId,
            data : movie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar pelicula por ID",
            data: error
        });
    }
}

exports.newMovie = async (req, res) => {
    try{
        const { nombre, director, año, duracion, genero } = req.body;
        const newMovie = new Movie ({ nombre, director, año, duracion, genero }); //Acceder al body
        await newMovie.save();

        return res.status(200).json({
            message : "Pelicula creada",
            data : newMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al crear pelicula",
            data: error
        });
    }
}

exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId; //Acceder a los parametros
    const newData = req.body; //Acceder al body
    
    try{
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData, { new : true });

        return res.status(201).json({
            message : "Actualizar pelicula por ID: " + movieId,
            data : updateMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al actualizar pelicula",
            data: error
        });
    }
}

exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId; //Acceder a los parametros

    try{
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).json({
            message : "Pelicula eliminado con Id: " + movieId,
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al eliminar pelicula",
            data: error
        });
    }
}