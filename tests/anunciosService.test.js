// tests/anunciosService.test.js
// Pruebas unitarias del servicio de anuncios.

const {
  listarAnuncios,
  obtenerAnuncioPorId,
  crearAnuncio,
} = require('../src/services/anunciosService');

describe('anunciosService', () => {
  test('listarAnuncios retorna un arreglo con los anuncios iniciales', () => {
    const anuncios = listarAnuncios();
    expect(Array.isArray(anuncios)).toBe(true);
    expect(anuncios.length).toBeGreaterThanOrEqual(3);
  });

  test('crearAnuncio agrega un nuevo anuncio con id autogenerado', () => {
    const totalAntes = listarAnuncios().length;

    const nuevo = crearAnuncio({
      titulo: 'Niñera',
      descripcion: 'Cuidado de niños en horario nocturno',
      ciudad: 'Villavicencio',
      salario: 35000,
      anuncianteId: 1,
    });

    expect(nuevo).toHaveProperty('id');
    expect(nuevo.titulo).toBe('Niñera');
    expect(listarAnuncios().length).toBe(totalAntes + 1);
  });

  test('obtenerAnuncioPorId retorna el anuncio correcto', () => {
    const anuncio = obtenerAnuncioPorId(2);
    expect(anuncio.id).toBe(2);
    expect(anuncio).toHaveProperty('titulo');
  });

  test('obtenerAnuncioPorId lanza error si el anuncio no existe', () => {
    expect(() => obtenerAnuncioPorId(9999)).toThrow('Anuncio no encontrado');
  });
});
