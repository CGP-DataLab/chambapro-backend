// server.js
// Punto de entrada del servicio web de autenticación de ChambaPro.

const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas del módulo de autenticación (registro / login)
app.use('/api/auth', authRoutes);

// Ruta simple para comprobar que el servicio está vivo
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servicio web de autenticación de ChambaPro activo' });
});

const PUERTO = process.env.PORT || 4000;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});

module.exports = app;
