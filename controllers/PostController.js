const Post = require('../models/Post.js');

const PostController = {
  async create(req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send({ message: "Todos los campos son obligatorios: title y content" });
  }

  try {
    const post = await Post.create({ title, content });
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send({ message: "Error al crear publicación" });
  }
},


  async getAll(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).send(posts);
    } catch (error) {
      res.status(500).send({ message: "Error al obtener publicaciones" });
    }
  },

  async getById(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      if (!post) return res.status(404).send({ message: "Publicación no encontrada" });
      res.status(200).send(post);
    } catch (error) {
      res.status(500).send({ message: "Error al buscar por ID" });
    }
  },

  async getByTitle(req, res) {
    try {
      const post = await Post.findOne({ title: req.params.title });
      if (!post) return res.status(404).send({ message: "Publicación no encontrada por título" });
      res.status(200).send(post);
    } catch (error) {
      res.status(500).send({ message: "Error al buscar por título" });
    }
  },

  async update(req, res) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true });
      if (!updatedPost) return res.status(404).send({ message: "Publicación no encontrada" });
      res.status(200).send(updatedPost);
    } catch (error) {
      res.status(500).send({ message: "Error al actualizar publicación" });
    }
  },

  async delete(req, res) {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params._id);
      if (!deletedPost) return res.status(404).send({ message: "Publicación no encontrada" });
      res.status(200).send({ message: "Publicación eliminada con éxito" });
    } catch (error) {
      res.status(500).send({ message: "Error al eliminar publicación" });
    }
  },

  async getPostsWithPagination(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const posts = await Post.find().skip(skip).limit(limit);
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ message: "Error al obtener publicaciones paginadas" });
  }
}

};

module.exports = PostController;
