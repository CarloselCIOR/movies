const express = require('express'); //Importar express
const router = express.Router();    //Importar router
const movieController = require('../controllers/movies.controller'); //Importar booksController
const authMiddleware = require('../utils/auth.middleware');

router.get('/', movieController.getMovies);

router.get('/:movieId', movieController.getMoviesbyId);

router.post('/', authMiddleware.authenticateToken, movieController.newMovie);

router.put('/:movieId', authMiddleware.authenticateToken, movieController.updateMovie);

router.delete('/:movieId', authMiddleware.authenticateToken, movieController.deleteMovie);

module.exports = router;