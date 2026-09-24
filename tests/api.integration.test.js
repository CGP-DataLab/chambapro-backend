// tests/api.integration.test.js
// Pruebas de integración: levantan la app completa (src/app.js) con
// todos sus módulos ya conectados, y verifican que respondan juntos
// como un solo sistema (GA8-220501096-AA1-EV01).

const request = require('supertest');
const app = require('../src/app');

describe('Integración de módulos — ChambaPro API', () => {
  test('GET / responde que el servicio está activo', async () => {
    const respuesta = await request(app).get('/');
    expect(respuesta.status).toBe(200);
    expect(respuesta.body.mensaje).toMatch(/activos/);
  });

  test('GET /api/anuncios responde con la lista de anuncios', async () => {
    const respuesta = await request(app).get('/api/anuncios');
    expect(respuesta.status).toBe(200);
    expect(Array.isArray(respuesta.body)).toBe(true);
  });

  test('Flujo completo: registro -> login -> publicar anuncio', async () => {
    const usuario = `integracion_${Date.now()}`;

    const registro = await request(app)
      .post('/api/auth/registro')
      .send({ usuario, contrasena: 'clave123' });
    expect(registro.status).toBe(201);

    const login = await request(app)
      .post('/api/auth/login')
      .send({ usuario, contrasena: 'clave123' });
    expect(login.status).toBe(200);
    expect(login.body.mensaje).toBe('Autenticación satisfactoria');

    const anuncio = await request(app)
      .post('/api/anuncios')
      .send({ titulo: 'Cocinero/a', descripcion: 'Turno de almuerzo', ciudad: 'Villavicencio', salario: 42000 });
    expect(anuncio.status).toBe(201);
    expect(anuncio.body).toHaveProperty('id');
  });
});
