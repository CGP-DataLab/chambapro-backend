// src/middlewares/validarAnuncio.js
// Valida los datos de un anuncio antes de crearlo.

function validarAnuncio(req, res, next) {
  const { titulo, descripcion, ciudad, salario } = req.body;

  if (!titulo || !descripcion || !ciudad || salario === undefined) {
    return res.status(400).json({
      mensaje: 'titulo, descripcion, ciudad y salario son obligatorios',
    });
  }

  if (titulo.trim().length < 3) {
    return res.status(400).json({ mensaje: 'El título debe tener al menos 3 caracteres' });
  }

  const salarioNumerico = Number(salario);
  if (Number.isNaN(salarioNumerico) || salarioNumerico <= 0) {
    return res.status(400).json({ mensaje: 'El salario debe ser un número mayor a cero' });
  }

  next();
}

module.exports = { validarAnuncio };
