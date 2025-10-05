# Aplicación de Cuentas de Ahorro

Esta es una aplicación Full Stack para gestionar cuentas de ahorro y transacciones. El frontend está desarrollado en Angular y consume una API RESTful.

## Requisitos

- Node.js (versión 18 o superior)
- npm
- API backend corriendo en http://localhost:3100 (proporcionada en la colección de Postman)

## Instalación

1. Clona el repositorio.
2. Navega al directorio del frontend: `cd savings-accounts-app`
3. Instala las dependencias: `npm install`

## Ejecución

1. Asegúrate de que la API backend esté corriendo en http://localhost:3100.
2. Ejecuta el servidor de desarrollo: `npm start` o `ng serve`
3. Abre tu navegador en `http://localhost:4200`

## Funcionalidades

- Registro e inicio de sesión de usuarios
- Lista de cuentas de ahorro
- Detalles de cuenta con historial de transacciones
- Creación de nuevas transacciones (depósito/retiro)

## Arquitectura

- **Frontend**: Angular 19 con TypeScript
- **Estilos**: Tailwind CSS
- **Autenticación**: JWT
- **API**: RESTful con HttpClient

## Pruebas

Ejecuta las pruebas unitarias con: `ng test`

## Construcción para Producción

Ejecuta `ng build` para construir la aplicación. Los artefactos se almacenan en el directorio `dist/`.

## API Endpoints

La aplicación consume los siguientes endpoints de la API:

- POST /auth/register - Registro de usuario
- POST /auth/login - Inicio de sesión
- GET /accounts - Lista de cuentas
- GET /accounts/:id - Detalles de cuenta
- POST /accounts - Crear cuenta
- GET /transactions/:accountId - Transacciones de una cuenta
- POST /transactions - Crear transacción

Para más detalles, consulta la colección de Postman proporcionada.
