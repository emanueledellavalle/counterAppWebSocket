# counterApp
A minimal Web-based application in nodejs, html, and js that demonstrates REST services.

## Architecture

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
