// tests/validarAnuncio.test.js
// Pruebas unitarias del middleware de validación de anuncios.
// Se simulan (mockean) los objetos req, res y next de Express.

const { validarAnuncio } = require('../src/middlewares/validarAnuncio');

function crearMockRes() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

describe('validarAnuncio (middleware)', () => {
  test('deja pasar la petición cuando todos los campos son válidos', () => {
    const req = { body: { titulo: 'Jardinero', descripcion: 'Mantenimiento', ciudad: 'Villavicencio', salario: 40000 } };
    const res = crearMockRes();
    const next = jest.fn();

    validarAnuncio(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  test('rechaza la petición si faltan campos obligatorios', () => {
    const req = { body: { titulo: 'Jardinero' } };
    const res = crearMockRes();
    const next = jest.fn();

    validarAnuncio(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
  });

  test('rechaza la petición si el salario no es un número positivo', () => {
    const req = { body: { titulo: 'Jardinero', descripcion: 'Mantenimiento', ciudad: 'Villavicencio', salario: -10 } };
    const res = crearMockRes();
    const next = jest.fn();

    validarAnuncio(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
  });
});
