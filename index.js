const express = require('express');
const app = express();
const dbConnection = require('./config/config');
const postRouter = require('./routes/post');
const { getAll } = require('./controllers/PostController'); // ✔️
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
dbConnection();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', getAll);

app.use('/posts', postRouter);


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
}

module.exports = app; 
