import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

import swaggerDocs from './swagger.js';
import { createPost, deletePost, getPost, getPosts, updatePost } from './src/queries.js';

const port = 3000;

const app = express();

app.use(cors());

// Allows our server to receive JSON data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Middleware para registrar detalles de las solicitudes en un archivo de registro
app.use((req, res, next) => {
  console.error('In Middleware');
  const timestamp = new Date().toISOString();
  const logMessage = `Timestamp: ${timestamp}\nEndpoint: ${req.method} ${
    req.originalUrl
  }\nPayload: ${JSON.stringify(req.body)}\n`;

  // Abrir el archivo de logs
  fs.appendFile('log.txt', logMessage, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo de registro:', err);
    }
  });

  // Capturar la respuesta para incluir en el log
  const originalSend = res.send;
  res.send = function (body) {
    const responseMessage = `Response: ${JSON.stringify(body)}\n\n`;
    fs.appendFile('log.txt', responseMessage, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de registro:', err);
      }
    });
    originalSend.call(this, body);
  };

  next();
});

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express con MySQL!');
});

app.get('/posts', getPosts);
app.get('/posts/:id', getPost);
app.post('/posts', createPost);
app.put('/posts/:id', updatePost);
app.delete('/posts/:id', deletePost);

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
  swaggerDocs(app, port);
});
