# Endpoints — API del proyecto ChambaPro

Evidencia: GA7-220501096-AA5-EV04
Base URL local: http://localhost:4000

| Método | Endpoint            | Descripción                                   |
|--------|---------------------|------------------------------------------------|
| GET    | /api/anuncios       | Lista todos los anuncios de empleo             |
| GET    | /api/anuncios/:id   | Obtiene un anuncio puntual                     |
| POST   | /api/anuncios       | Crea un nuevo anuncio                          |
| GET    | /api/usuarios/:id   | Obtiene el perfil de un usuario                |
| POST   | /api/acuerdos       | Confirma un acuerdo entre anunciante y trabajador |
| GET    | /api/acuerdos       | Lista todos los acuerdos confirmados           |

## POST /api/anuncios

**Body:**
```json
{ "titulo": "Jardinero", "descripcion": "Mantenimiento de jardines residenciales", "ciudad": "Villavicencio", "salario": 40000, "anuncianteId": 1 }
```

**Respuesta exitosa — 201:**
```json
{ "id": 4, "titulo": "Jardinero", "descripcion": "...", "ciudad": "Villavicencio", "salario": 40000, "anuncianteId": 1, "calificacionAnunciante": 0 }
```

**Respuesta con error — 400:**
```json
{ "mensaje": "titulo, descripcion, ciudad y salario son obligatorios" }
```

## GET /api/anuncios/:id

**Respuesta exitosa — 200:**
```json
{ "id": 2, "titulo": "Aseo general", "descripcion": "...", "ciudad": "Villavicencio", "salario": 38000, "anuncianteId": 2, "calificacionAnunciante": 5 }
```

**Respuesta con error — 404:**
```json
{ "mensaje": "Anuncio no encontrado" }
```

## GET /api/usuarios/:id

**Respuesta exitosa — 200:**
```json
{ "id": 1, "nombre": "Camilo Ríos", "rol": "anunciante", "calificacion": 4 }
```

## POST /api/acuerdos

**Body:**
```json
{ "anuncioId": 1, "trabajadorId": 2 }
```

**Respuesta exitosa — 201:**
```json
{ "mensaje": "Acuerdo confirmado exitosamente", "acuerdo": { "id": 1, "anuncioId": 1, "trabajadorId": 2, "estado": "confirmado", "fecha": "..." } }
```

**Respuesta con error — 400:**
```json
{ "mensaje": "anuncioId y trabajadorId son obligatorios para confirmar el acuerdo" }
```
