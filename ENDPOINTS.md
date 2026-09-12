# Endpoints — ChambaPro API de autenticación

Evidencia: GA7-220501096-AA5-EV02
Base URL local: http://localhost:4000

| Método | Endpoint            | Descripción                                   |
|--------|---------------------|------------------------------------------------|
| GET    | /                   | Health check — confirma que el servicio está activo |
| POST   | /api/auth/registro  | Registra un nuevo usuario (usuario + contraseña) |
| POST   | /api/auth/login     | Autentica un usuario existente                |

## POST /api/auth/registro

**Body:**
```json
{ "usuario": "camilo23", "contrasena": "clave123" }
```

**Respuesta exitosa — 201:**
```json
{ "mensaje": "Usuario registrado exitosamente", "usuario": "camilo23" }
```

**Respuesta con error — 400:**
```json
{ "mensaje": "El usuario ya se encuentra registrado" }
```

## POST /api/auth/login

**Body:**
```json
{ "usuario": "camilo23", "contrasena": "clave123" }
```

**Respuesta exitosa — 200:**
```json
{ "mensaje": "Autenticación satisfactoria" }
```

**Respuesta con error — 401:**
```json
{ "mensaje": "Error en la autenticación" }
```

---

# Servicios del proyecto (AA5-EV03)

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
{ "titulo": "Jardinero", "descripcion": "Mantenimiento de jardines", "ciudad": "Villavicencio", "salario": 40000 }
```

**Respuesta exitosa — 201:**
```json
{ "id": 4, "titulo": "Jardinero", "descripcion": "...", "ciudad": "Villavicencio", "salario": 40000, "anuncianteId": null, "calificacionAnunciante": 0 }
```

**Respuesta con error — 400:**
```json
{ "mensaje": "titulo, descripcion, ciudad y salario son obligatorios" }
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

