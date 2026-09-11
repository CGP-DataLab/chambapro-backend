// src/routes/authRoutes.js
// Define los endpoints del servicio web de autenticación.

const express = require('express');
const router = express.Router();

const { registro, login } = require('../controllers/authController');
const { validarRegistro, validarLogin } = require('../middlewares/validarCampos');

// POST /api/auth/registro -> crea un nuevo usuario
router.post('/registro', validarRegistro, registro);

// POST /api/auth/login -> autentica un usuario existente
router.post('/login', validarLogin, login);

module.exports = router;
