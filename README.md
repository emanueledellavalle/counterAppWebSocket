# counterApp (Web Socket)
Autore: [Emanuele Della Valle](http://emanueledellavalle.org/)

Un'applicazione web minimale in nodejs, html e js che dimostra i servizi REST e **i Web Socket**.

## Architettura

Si tratta di un'applicazione client-server basata sul Web.

Il server è un'applicazione node.js che espone i seguenti servizi:
- `GET /inc?n=<valore>` aggiunge `valore` al contatore 
- `GET /dec?n=<valore>` sottrae `valore` dal contatore
- **Ogni volta che il server aggiorna il counter, invia via WebSocket a tutti i client il nuovo valore.**
- `GET /` serve la pagina index.html nel folder public all'utente.

Il client è una pagina web HTML 5 che
- **Riceve e mostra automaticamente l'aggiornamento del counter senza polling.**
- offre un campo `input` per consentire all'utente di inserire un numero
- offre due pulsanti: 
  - uno incrementa il contatore del valore presente nel campo di input, chiamando il servizio `GET /inc?n=<value>`
  - l'altro decrementa il contatore chiamando il servizio `GET /dec?n=<valore>`.

## prerequisiti

1. avere installato Node.js e VSC
2. installare express con `npm install express`
3. installare i Web Socket con `npm install ws`

## demo
1. lancia il server dalla cartella `counter` in cui c'è `counter.js` con il comando `node counter.js`
2. apri [http://127.0.0.1:3000/](http://127.0.0.1:3000/) per provare la demo
3. pubblica l'applicazione su internet facendo *port forward* (vedi punto 10 in [setup node.js e VSC](https://github.com/IxD-PoliMI/setup-node-js-and-VSC))
4. apri da un altro dispositivo (es. il tuo telefono) l'url del *forwarded address* 
5. **osserva che puoi cambiare il valore del counter dai due dispositivi e questo si aggiorna su tutti contemporaneamente**

# counterApp (Web Socket)
Author: [Emanuele Della Valle](http://emanueledellavalle.org/)

A minimal web application in nodejs, html and js that demonstrates REST services and **Web Sockets**.

## Architecture

This is a web-based client-server application.

The server is a node.js application that exposes the following services:
- `GET /inc?n=<value>` adds `value` to the counter 
- `GET /dec?n=<value>` subtracts `value` from the counter
- **Every time the server updates the counter, it sends the new value to all clients via WebSocket.**
- `GET /` serves the index.html page in the public folder to the user.

The client is an HTML 5 web page that
- **Receives and automatically displays the counter update without polling.**
- offers an `input` field to allow the user to enter a number
- offers two buttons: 
one increases the counter by the value in the input field, calling the service GET /inc?n=<value>
the other decreases the counter by calling the service GET /dec?n=<value>.

## prerequisites

1. have Node.js and VSC installed
2. install express with npm install express
3. install Web Sockets with `npm install ws`

## demo
1. launch the server from the `counter` folder where you'll find `counter.js` with the command `node counter.js`
2. open [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to try the demo
3. publish the application on the internet by doing a *port forward* (see point 10 in [setup node.js and VSC](https://github.com/IxD-PoliMI/setup-node-js-and-VSC))
4. open the url of the *forwarded address* from another device (e.g. your phone) 
5. **note that you can change the counter value from the two devices and it updates on all of them simultaneously**