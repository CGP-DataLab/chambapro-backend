// src/middlewares/validarCampos.js
// Middlewares encargados de validar la información que llega
// en el cuerpo de la petición antes de tocar la lógica de negocio.

function validarRegistro(req, res, next) {
  const { usuario, contrasena } = req.body;

  // Verificamos que ambos campos hayan llegado
  if (!usuario || !contrasena) {
    return res.status(400).json({ mensaje: 'El usuario y la contraseña son obligatorios' });
  }

  // El usuario debe tener un mínimo de caracteres
  if (usuario.trim().length < 4) {
    return res.status(400).json({ mensaje: 'El usuario debe tener al menos 4 caracteres' });
  }

  // La contraseña debe cumplir una longitud mínima de seguridad
  if (contrasena.length < 6) {
    return res.status(400).json({ mensaje: 'La contraseña debe tener al menos 6 caracteres' });
  }

  next();
}

function validarLogin(req, res, next) {
  const { usuario, contrasena } = req.body;

  if (!usuario || !contrasena) {
    return res.status(400).json({ mensaje: 'El usuario y la contraseña son obligatorios' });
  }

  next();
}

module.exports = { validarRegistro, validarLogin };
