// src/controllers/usuariosController.js

const { obtenerUsuarioPorId } = require('../services/usuariosService');

function obtenerPerfil(req, res) {
  const usuario = obtenerUsuarioPorId(req.params.id);
  return res.status(200).json(usuario);
}

module.exports = { obtenerPerfil };
