// src/services/anunciosService.js
// Lógica de negocio del módulo de anuncios de empleo.
// Igual que en el módulo de autenticación, simulo la base de datos
// con un arreglo en memoria (en producción sería MongoDB/PostgreSQL).

let siguienteId = 4;

const anuncios = [
  {
    id: 1,
    titulo: 'Domiciliario',
    descripcion: 'Entrega de pedidos en el centro de la ciudad, turno de tarde.',
    ciudad: 'Villavicencio',
    salario: 45000,
    anuncianteId: 1,
    calificacionAnunciante: 4,
  },
  {
    id: 2,
    titulo: 'Aseo general',
    descripcion: 'Limpieza de oficinas, disponibilidad los fines de semana.',
    ciudad: 'Villavicencio',
    salario: 38000,
    anuncianteId: 2,
    calificacionAnunciante: 5,
  },
  {
    id: 3,
    titulo: 'Mesero/a',
    descripcion: 'Atención al cliente en restaurante, turno nocturno.',
    ciudad: 'Villavicencio',
    salario: 42000,
    anuncianteId: 1,
    calificacionAnunciante: 3,
  },
];

function listarAnuncios() {
  return anuncios;
}

function obtenerAnuncioPorId(id) {
  const anuncio = anuncios.find((a) => a.id === Number(id));
  if (!anuncio) {
    throw new Error('Anuncio no encontrado');
  }
  return anuncio;
}

function crearAnuncio(datos) {
  const nuevoAnuncio = {
    id: siguienteId++,
    titulo: datos.titulo,
    descripcion: datos.descripcion,
    ciudad: datos.ciudad,
    salario: Number(datos.salario),
    anuncianteId: datos.anuncianteId || null,
    calificacionAnunciante: 0,
  };

  anuncios.push(nuevoAnuncio);
  return nuevoAnuncio;
}

module.exports = { listarAnuncios, obtenerAnuncioPorId, crearAnuncio };
