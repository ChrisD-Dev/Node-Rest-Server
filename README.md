# Node Rest Server

## Descripción del proyecto

Este proyecto consiste en un servidor RESTful desarrollado con Node.js y Express.js, diseñado para gestionar la creación y autenticación de usuarios, así como la administración de productos a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar). La funcionalidad del CRUD de productos está protegida por un sistema de autenticación, asegurando que solo los usuarios autenticados y con role de "admin" puedan realizar modificaciones. Además, el servidor incluye una funcionalidad de seed para rellenar la base de datos con datos iniciales.

## Requisitos Previos

- Node.js 
- Docker
- MongoDB

## Funcionalidades
#### Gestión de Usuarios
- Registro de Usuarios: Permite la creación de nuevos usuarios con la información necesaria.
- Autenticación de Usuarios: Los usuarios pueden iniciar sesión proporcionando sus credenciales. Al autenticarse correctamente, reciben un token que les permite acceder a funcionalidades protegidas del servidor.

#### Gestión de Productos (CRUD)
- Leer Producto: Todos los usuarios pueden obtener información sobre los productos disponibles.
- Crear Producto: Los usuarios autenticados pueden añadir nuevos productos al sistema.
- Actualizar Producto: Los usuarios autenticados pueden modificar la información de productos existentes.
- Eliminar Producto: Los usuarios autenticados pueden eliminar productos del sistema.

#### Seed de la Base de Datos
- Relleno de Datos Iniciales: Se incluye una funcionalidad de seed que permite poblar la base de datos con datos iniciales de usuarios y productos. Esto facilita la inicialización y pruebas del sistema.

#### Seguridad
- Middlewares de Autenticación: Se implementan middlewares que verifican la autenticación del usuario antes de permitir el acceso a las rutas de gestión de productos. Esto asegura que solo los usuarios con un token válido puedan realizar operaciones CRUD en los productos.

## Tecnologías Utilizadas
- **Node.js**: Plataforma de desarrollo para el servidor.
- **Express.js**: Framework web para Node.js, utilizado para la creación de las rutas y la gestión de las solicitudes HTTP.
- **JWT** (JSON Web Tokens): Implementación de tokens para la autenticación de usuarios.
- **MongoDB**: Base de datos utilizada para almacenar la información de usuarios y productos (puede ser sustituida por otra base de datos según necesidades).


## Instalación
- Clonar el repositorio.
- Renombrar `.env.template` a `.env`.
- Rellenar las variables de entorno
- Instalar las dependencias.
  ```bash
  npm install
  ```
- Levantar los servicios deseados.
  ```bash
  docker-compose up -d
  ```
- Llenar la base de datos con los datos de prueba ejecutando
  ```bash
  npm run seed
  ```
- Ejecutar la app
  ```bash
  npm run dev
  ```


### Rutas

> [!IMPORTANT]  
> Para poder Crear, Actualizar o Eliminar Productos se requiere autenticación mediante Bearer token. Este se obtiene haciendo primero el Login con un user. Por defecto existe el user:  `{email:luke.skywalker@starwars.com, password:MayTheForceBeWithYou}`


- POST -> `/api/auth/register`
- POST -> `/api/auth/login`
- GET ->`/api/products/get-products`
- POST -> `/api/products/create-product`
- DELETE -> `/api/products/delete-product`
- PUT -> `/api/products/update-product`




