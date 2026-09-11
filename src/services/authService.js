// src/services/authService.js
// Contiene la lógica de negocio: registrar usuarios y validar credenciales.
// Aquí simulo la base de datos con un arreglo en memoria; en producción
// esto se reemplazaría por una consulta real a MongoDB o PostgreSQL.

const bcrypt = require('bcryptjs');

const usuarios = [];

async function registrarUsuario(usuario, contrasena) {
  const yaExiste = usuarios.find((u) => u.usuario === usuario);

  if (yaExiste) {
    throw new Error('El usuario ya se encuentra registrado');
  }

  // Encriptamos la contraseña antes de guardarla (nunca en texto plano)
  const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);

  const nuevoUsuario = { usuario, contrasena: contrasenaEncriptada };
  usuarios.push(nuevoUsuario);

  return { usuario: nuevoUsuario.usuario };
}

async function autenticarUsuario(usuario, contrasena) {
  const usuarioEncontrado = usuarios.find((u) => u.usuario === usuario);

  if (!usuarioEncontrado) {
    throw new Error('Usuario no encontrado');
  }

  // Comparamos la contraseña ingresada contra el hash guardado
  const coincide = await bcrypt.compare(contrasena, usuarioEncontrado.contrasena);

  if (!coincide) {
    throw new Error('Contraseña incorrecta');
  }

  return true;
}

module.exports = { registrarUsuario, autenticarUsuario };
