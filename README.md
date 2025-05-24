# API REST de Node.js para PostgreSQL y DOCKER

Una API REST que utiliza Node.js y PostgreSQL con la biblioteca pg y contenedores Docker

## Requisitos
- Node.js
- PostgreSQL
- Docker

## Instalación

1. Clonar el repositorio: `git clone https://github.com/angelicadr/RedSocial.git`

2. en una terminal CMD ubicarse en la raíz donde se encuentre `docker-compose.yml `

3. Iniciar los servicios que se definieron en el `docker-compose.yml `:   `docker compose up --build`

4. para ingresar a la red social  en una pestaña del navegador  http://localhost:3000

5. Para detener y eliminar los contenedores: `docker compose down`

## Servicios

- Servicio Autenticacion: http://localhost:3000
- Servicio Perfil Ususrio: http://localhost:3000/profile
- Crear publicacion: http://localhost:3000/new
- Visualizar publicaciones y dar Like: http://localhost:3000/posts

## Funcionalidades

- Registro, Login con JWT
- Perfil de usuario
- Crear publicaciones
- Visualizar publicaciones con likes
- Dar like a publicaciones (una vez por usuario)

## Licencia

Este proyecto es software de código abierto con licencia MIT.