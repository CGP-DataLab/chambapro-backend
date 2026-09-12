// src/services/acuerdosService.js
// Formaliza el acuerdo entre un anunciante y un trabajador
// una vez se acepta una postulación (lo confirma AcuerdoModal.jsx).

let siguienteId = 1;
const acuerdos = [];

function crearAcuerdo({ anuncioId, trabajadorId }) {
  const nuevoAcuerdo = {
    id: siguienteId++,
    anuncioId: Number(anuncioId),
    trabajadorId: Number(trabajadorId),
    estado: 'confirmado',
    fecha: new Date().toISOString(),
  };

  acuerdos.push(nuevoAcuerdo);
  return nuevoAcuerdo;
}

function listarAcuerdos() {
  return acuerdos;
}

module.exports = { crearAcuerdo, listarAcuerdos };
