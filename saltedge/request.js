import axios from "axios";

// Funzione di richiesta generica per inviare richieste HTTP a Salt Edge
export async function request(url, { method, customerSecret, loginSecret = null, body = null }) {
  try {
    // Configurazione delle intestazioni
    const headers = {
      "Content-Type": "application/json",
      "App-id": "your_app_id",  // Sostituisci con il tuo App-ID
      "Secret": "your_secret_key",  // Sostituisci con il tuo Secret Key
      "Customer-secret": customerSecret,  // Segreto cliente
    };

    if (loginSecret) {
      headers["Login-secret"] = loginSecret;  // Segreto di login, se disponibile
    }

    // Esegui la richiesta HTTP
    const response = await axios({
      method: method, // "GET", "POST", ecc.
      url: url,
      headers: headers,
      data: body ? body : null,  // Dati del corpo della richiesta (per POST)
    });

    // Restituisci i dati della risposta
    return response.data;
  } catch (error) {
    // Gestione errori
    console.error("Request Error:", error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
}