// src/routes/acuerdosRoutes.js
// Endpoint que consume AcuerdoModal.jsx en el front-end.

const express = require('express');
const router = express.Router();

const { crear, listar } = require('../controllers/acuerdosController');
const { validarAcuerdo } = require('../middlewares/validarAcuerdo');

// POST /api/acuerdos -> confirma el acuerdo entre anunciante y trabajador
router.post('/', validarAcuerdo, crear);

// GET /api/acuerdos -> lista todos los acuerdos (uso administrativo)
router.get('/', listar);

module.exports = router;
