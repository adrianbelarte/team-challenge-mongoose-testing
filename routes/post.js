const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

// Crear publicación
router.post('/create', PostController.create);

// Obtener todas las publicaciones
router.get('/', PostController.getAll);

// Obtener publicación por ID
router.get('/id/:_id', PostController.getById);

// Obtener publicación por título
router.get('/title/:title', PostController.getByTitle);

// Actualizar publicación
router.put('/id/:_id', PostController.update);

// Eliminar publicación
router.delete('/id/:_id', PostController.delete);

router.get('/postsWithPagination', PostController.getPostsWithPagination);


module.exports = router;
