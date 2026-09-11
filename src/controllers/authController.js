// src/controllers/authController.js
// Recibe la petición HTTP, llama al servicio correspondiente
// y arma la respuesta que se envía al cliente (front-end de ChambaPro).

const { registrarUsuario, autenticarUsuario } = require('../services/authService');

async function registro(req, res) {
  const { usuario, contrasena } = req.body;

  try {
    const nuevoUsuario = await registrarUsuario(usuario, contrasena);
    return res.status(201).json({
      mensaje: 'Usuario registrado exitosamente',
      usuario: nuevoUsuario.usuario,
    });
  } catch (error) {
    // Si el servicio lanza un error de negocio (ej: usuario ya existe)
    return res.status(400).json({ mensaje: error.message });
  }
}

async function login(req, res) {
  const { usuario, contrasena } = req.body;

  try {
    await autenticarUsuario(usuario, contrasena);
    // Autenticación correcta
    return res.status(200).json({ mensaje: 'Autenticación satisfactoria' });
  } catch (error) {
    // Cualquier fallo de autenticación devuelve el mismo mensaje genérico
    // por seguridad (no revelamos si fue el usuario o la contraseña).
    return res.status(401).json({ mensaje: 'Error en la autenticación' });
  }
}

module.exports = { registro, login };
