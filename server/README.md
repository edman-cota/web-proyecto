# Lab 6: Server Side Javascript

Laboratorio 6 para poner en práctica los contenidos aprendidos en clase de de express y docker (docker-compose).

## Requerimientos

- Docker > 20
- Node > 16
- PostgreSQL > 14

### 1. Crear las imagenes y contenedores necesarios

El proyecto ya está configurado usando docker-compose que nos permite correr varias aplicaciones interconectados entre si con un solo comando.

Desde la carpeta raíz del proyecto, correr el siguente comando:

```sh
docker-compose up -d
```

¡List!. Ya tenemos nuestros contenedores de node y PostgreSQL corriendo en al misma red, conectados entre si.

## ¿Cómo probar los endpoints?

Los rutas disponibles:

- GET: http://localhost:3000/posts
- GET: http://localhost:3000/posts/:id
- POST: http://localhost:3000/posts/:id
- PUT: http://localhost:3000/posts/:id
- DELETE: http://localhost:3000/posts/:id
- GET: http://localhost:3000/docs

La forma más sencilla de visualizar la documentación de las rutas podemos navegar a la ruta, usando cualquier navegados: http://localhost:3000/docs
