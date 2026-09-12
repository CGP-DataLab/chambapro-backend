// src/middlewares/validarAcuerdo.js

function validarAcuerdo(req, res, next) {
  const { anuncioId, trabajadorId } = req.body;

  if (!anuncioId || !trabajadorId) {
    return res.status(400).json({
      mensaje: 'anuncioId y trabajadorId son obligatorios para confirmar el acuerdo',
    });
  }

  next();
}

module.exports = { validarAcuerdo };
