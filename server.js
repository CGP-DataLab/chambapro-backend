// server.js
// Punto de entrada: toma la app integrada (src/app.js) y la pone
// a escuchar en un puerto. Separarlo de app.js es justamente lo que
// permite integrar y probar los módulos sin depender de una conexión
// de red real (GA8-220501096-AA1-EV01).

const app = require('./src/app');

const PUERTO = process.env.PORT || 4000;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});

module.exports = app;
