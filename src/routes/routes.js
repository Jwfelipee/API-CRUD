const express = require('express');
const routes = express.Router();

const usuarioController = require("../controller/usuarios.js");

routes.post('/usuarios', usuarioController.insert);
routes.get('/usuarios', usuarioController.index);
routes.get('/usuarios/:id', usuarioController.details);
routes.put('/usuarios/:id', usuarioController.update);
routes.delete('/usuarios/:id', usuarioController.delete);

module.exports = routes;