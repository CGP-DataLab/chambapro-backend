// src/services/usuariosService.js
// Lógica de negocio para consultar el perfil de un usuario
// (anunciante o trabajador) por su id.

const usuarios = [
  { id: 1, nombre: 'Camilo Ríos', rol: 'anunciante', calificacion: 4 },
  { id: 2, nombre: 'Laura Gómez', rol: 'trabajador', calificacion: 5 },
];

function obtenerUsuarioPorId(id) {
  const usuario = usuarios.find((u) => u.id === Number(id));

  if (!usuario) {
    // Si no existe en la lista de demo, devuelvo un perfil genérico
    // para que el front-end siempre tenga algo que mostrar.
    return { id: Number(id), nombre: 'Usuario demo', rol: 'trabajador', calificacion: 0 };
  }

  return usuario;
}

module.exports = { obtenerUsuarioPorId };
