// tests/authService.test.js
// Pruebas unitarias del servicio de autenticación.
// Cada caso usa un usuario distinto para no chocar con el arreglo
// en memoria que comparten las pruebas dentro de este mismo archivo.

const { registrarUsuario, autenticarUsuario } = require('../src/services/authService');

describe('authService', () => {
  test('registrarUsuario crea un usuario nuevo correctamente', async () => {
    const resultado = await registrarUsuario('usuarioTest1', 'clave123');
    expect(resultado.usuario).toBe('usuarioTest1');
  });

  test('registrarUsuario rechaza un usuario ya registrado', async () => {
    await registrarUsuario('usuarioTest2', 'clave123');

    await expect(registrarUsuario('usuarioTest2', 'clave123')).rejects.toThrow(
      'El usuario ya se encuentra registrado'
    );
  });

  test('autenticarUsuario retorna true con credenciales correctas', async () => {
    await registrarUsuario('usuarioTest3', 'claveCorrecta');

    const resultado = await autenticarUsuario('usuarioTest3', 'claveCorrecta');
    expect(resultado).toBe(true);
  });

  test('autenticarUsuario rechaza una contraseña incorrecta', async () => {
    await registrarUsuario('usuarioTest4', 'claveCorrecta');

    await expect(autenticarUsuario('usuarioTest4', 'claveMala')).rejects.toThrow(
      'Contraseña incorrecta'
    );
  });

  test('autenticarUsuario rechaza un usuario que no existe', async () => {
    await expect(autenticarUsuario('usuarioQueNoExiste', 'clave123')).rejects.toThrow(
      'Usuario no encontrado'
    );
  });
});
