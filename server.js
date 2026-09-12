// server.js
// Punto de entrada de los servicios web de ChambaPro:
// autenticación, anuncios, usuarios y acuerdos.

const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const anunciosRoutes = require('./src/routes/anunciosRoutes');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const acuerdosRoutes = require('./src/routes/acuerdosRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas del módulo de autenticación (registro / login) — AA5-EV01/EV02
app.use('/api/auth', authRoutes);

// Rutas del proyecto formativo ChambaPro — AA5-EV03
app.use('/api/anuncios', anunciosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/acuerdos', acuerdosRoutes);

// Ruta simple para comprobar que el servicio está vivo
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servicios web de ChambaPro activos' });
});

const PUERTO = process.env.PORT || 4000;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});

module.exports = app;
