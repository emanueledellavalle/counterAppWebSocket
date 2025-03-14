const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from 'public' folder
app.use(express.static('public'));

let counter = 0;

// Funzione per inviare il nuovo valore a tutti i client connessi
function broadcastCounter() {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(counter.toString());
    }
  });
}

// Rotte per incrementare e decrementare
app.get('/inc', (req, res) => {
  const increment = parseInt(req.query.n) || 0;
  counter += increment;
  broadcastCounter(); // Avvisa tutti i client
  res.json({ message: `Counter incremented by ${increment}`, value: counter }); // Optional
});

app.get('/dec', (req, res) => {
  const decrement = parseInt(req.query.n) || 0;
  counter -= decrement;
  broadcastCounter(); // Avvisa tutti i client
  res.json({ message: `Counter decremented by ${decrement}`, value: counter }); // Optional
});

// Gestione delle connessioni WebSocket
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send(counter.toString()); // Manda subito il valore attuale al nuovo client

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Avvia il server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
