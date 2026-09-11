# ChambaPro — Servicio web de autenticación

Servicio web (API REST) construido con **Node.js + Express** para el
registro e inicio de sesión de usuarios de ChambaPro.

Evidencia: `GA7-220501096-AA5-EV01` — Diseño y desarrollo de servicios
web - caso.

## 🚀 Cómo correr el proyecto

```bash
npm install
npm run start
```

El servicio queda disponible en `http://localhost:4000`.

## 🔌 Endpoints

### POST `/api/auth/registro`

Crea un nuevo usuario.

**Body:**
```json
{
  "usuario": "camilo23",
  "contrasena": "clave123"
}
```

**Respuesta exitosa (201):**
```json
{ "mensaje": "Usuario registrado exitosamente", "usuario": "camilo23" }
```

### POST `/api/auth/login`

Autentica un usuario existente.

**Body:**
```json
{
  "usuario": "camilo23",
  "contrasena": "clave123"
}
```

**Respuesta exitosa (200):**
```json
{ "mensaje": "Autenticación satisfactoria" }
```

**Respuesta con error (401):**
```json
{ "mensaje": "Error en la autenticación" }
```

## 🗂️ Estructura

```
src/
├── routes/authRoutes.js
├── controllers/authController.js
├── services/authService.js
└── middlewares/validarCampos.js
server.js
```
