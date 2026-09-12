// src/controllers/acuerdosController.js

const { crearAcuerdo, listarAcuerdos } = require('../services/acuerdosService');

function crear(req, res) {
  const nuevoAcuerdo = crearAcuerdo(req.body);
  return res.status(201).json({ mensaje: 'Acuerdo confirmado exitosamente', acuerdo: nuevoAcuerdo });
}

function listar(req, res) {
  return res.status(200).json(listarAcuerdos());
}

module.exports = { crear, listar };
