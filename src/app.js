// src/app.js
// Configuración de la aplicación Express de ChambaPro, separada del
// arranque del servidor (server.js) para poder integrarla y probarla
// de forma limpia con Jest + Supertest, sin necesidad de abrir un
// puerto real durante las pruebas unitarias.

const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const anunciosRoutes = require('./routes/anunciosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const acuerdosRoutes = require('./routes/acuerdosRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Integración de los módulos del sistema ChambaPro (GA8-220501096-AA1-EV01)
app.use('/api/auth', authRoutes);
app.use('/api/anuncios', anunciosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/acuerdos', acuerdosRoutes);

// Ruta simple para comprobar que el servicio está vivo
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servicios web de ChambaPro activos' });
});

module.exports = app;
