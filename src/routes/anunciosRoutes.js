// src/routes/anunciosRoutes.js
// Endpoints del módulo de anuncios de empleo (lo que consume
// AnuncioCard.jsx y PublicarAnuncioForm.jsx en el front-end).

const express = require('express');
const router = express.Router();

const { listar, obtenerPorId, crear } = require('../controllers/anunciosController');
const { validarAnuncio } = require('../middlewares/validarAnuncio');

// GET /api/anuncios -> lista todos los anuncios (feed de Home.jsx)
router.get('/', listar);

// GET /api/anuncios/:id -> obtiene un anuncio puntual
router.get('/:id', obtenerPorId);

// POST /api/anuncios -> crea un nuevo anuncio (PublicarAnuncioForm.jsx)
router.post('/', validarAnuncio, crear);

module.exports = router;
