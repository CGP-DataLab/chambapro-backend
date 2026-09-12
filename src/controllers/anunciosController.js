// src/controllers/anunciosController.js
// Conecta las rutas de anuncios con el servicio y arma las respuestas HTTP.

const { listarAnuncios, obtenerAnuncioPorId, crearAnuncio } = require('../services/anunciosService');

function listar(req, res) {
  const anuncios = listarAnuncios();
  return res.status(200).json(anuncios);
}

function obtenerPorId(req, res) {
  try {
    const anuncio = obtenerAnuncioPorId(req.params.id);
    return res.status(200).json(anuncio);
  } catch (error) {
    return res.status(404).json({ mensaje: error.message });
  }
}

function crear(req, res) {
  const nuevoAnuncio = crearAnuncio(req.body);
  return res.status(201).json(nuevoAnuncio);
}

module.exports = { listar, obtenerPorId, crear };
