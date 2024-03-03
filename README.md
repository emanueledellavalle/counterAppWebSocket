# counterApp
Autore: [Emanuele Della Valle](http://emanueledellavalle.org/), [Matteo Valoriani](https://www.linkedin.com/in/matteovaloriani/)

Un'applicazione web minimale in nodejs, html e js che dimostra i servizi REST.

## Architettura

Si tratta di un'applicazione client-server basata sul Web.

Il server è un'applicazione node.js che espone i seguenti servizi:
- `GET /` restituisce lo stato del contatore; il valore iniziale è 0
- `GET /inc?n=<valore>` aggiunge `valore` al contatore 
- `GET /dec?n=<valore>` sottrae `valore` dal contatore 
- `GET /client` serve la pagina HTML all'utente.

Il client è una pagina web HTML 5 che
- richiama il `GET /` per visualizzare lo stato
- offre un campo `input` per consentire all'utente di inserire un numero
- offre due pulsanti: 
  - uno incrementa il contatore del valore presente nel campo di input, chiamando il servizio `GET /inc?n=<value>`
  - l'altro decrementa il contatore chiamando il servizio `GET /dec?n=<valore>`.

In particolare, il server utilizza CORS ([Cross-Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).


## prerequisiti

1. [installare node.js](https://nodejs.org/en/download)
2. installare i moduli richiesti
 	* `npm install express` un componente base di node che potrebbe essere già installato
	* `npm install cors` per permettere a pagine non servite dal server di chiamarlo

## demo
1. lanciare il server dalla cartella `counter` in cui c'è `counter.js` con il comando `node counter.js`
2. aprire [http://127.0.0.1:3000/client](http://127.0.0.1:3000/client) per provare la demo
3. aprire il file in `./otherServer/clientNoCorsErr.html` per verificare che non da problemi di CORS

# counterApp
A minimalist web application in nodejs, html and js demonstrating REST services.

## Architecture
Author: [Emanuele Della Valle](http://emanueledellavalle.org/), [Matteo Valoriani](https://www.linkedin.com/in/matteovaloriani/)

This is a web-based client-server application.

The server is a node.js application that exposes the following services:
- `GET /` returns the counter state; the initial value is 0
- `GET /inc?n=<value>` adds `value` to the counter 
- `GET /dec?n=<value>` subtracts `value` from the counter 
- `GET /client` serves the HTML page to the user.

The client is an HTML 5 web page that
- calls the `GET /` to display the status
- offers an `input` field to allow the user to enter a number
- offers two buttons: 
  - one increments the counter of the value in the input field, calling the `GET /inc?n=<value>` service
  - the other decrements the counter by calling the `GET /dec?n=<value>` service.

In particular, the server uses CORS ([Cross-Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).

## prerequisites

1. [install node.js](https://nodejs.org/en/download)
2. install the required modules
 	* `npm install express` a basic node component that may already be installed
	* `npm install cors` to allow pages not served by the server to call it

## demo
1. launch the server from the `counter` folder where `counter.js` is located with the command `node counter.js`
2. open [http://127.0.0.1:3000/client](http://127.0.0.1:3000/client) to try the demo
3. open the file in `./otherServer`
