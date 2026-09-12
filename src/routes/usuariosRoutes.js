// src/routes/usuariosRoutes.js
// Endpoint que consume PerfilUsuario.jsx en el front-end.

const express = require('express');
const router = express.Router();

const { obtenerPerfil } = require('../controllers/usuariosController');

// GET /api/usuarios/:id -> perfil de un anunciante o trabajador
router.get('/:id', obtenerPerfil);

module.exports = router;
