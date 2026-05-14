(function() {

  let config = {};

  // Funzione per caricare la configurazione dal file JSON
  async function loadConfig() {
    try {
      // Carica la configurazione
      const response = await fetch('/assets/env-config.json');  // Percorso del file di configurazione
      //console.log(response);
      if (response.ok) {
        config = await response.json();
        //console.log('Configurazione caricata:', config);
      } else {
        //console.log('Il file di configurazione non esiste. Utilizzo l\'URL predefinito.');
      }
    } catch (error) {
      //console.error('Errore nel caricamento della configurazione:', error);
    }
  }

  function encodeQueryString(url) {
    const [baseUrl, queryString] = url.split('?');
    var finalUrl = baseUrl;
    // console.log(queryString);
    if (config.basePath) {
      finalUrl = finalUrl.replace('https://api.arubacloud.com', config.basePath);
    }
    //console.log(finalUrl);
    if (!queryString) {
      return finalUrl; // Nessuna query string da codificare
    }
    const encodedQueryString = queryString.split('&').map(param => {
      const [key, value] = param.split('=');
      return `${encodeURIComponent(key)}=${encodeURIComponent(value).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      })}`;
    }).join('&');
    //console.log(encodedQueryString);
    return `${finalUrl}?${encodedQueryString}`;
  }
    // Funzione per aggiungere il timeout alla fetch
  const fetchWithTimeout = (url, options = {}, timeout = 10000) => {
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(new Error('Request timed out'));  // Timeout di 10 secondi (modificabile)
        }, timeout);
  
        originalFetch(url, options)
          .then(response => {
            clearTimeout(timer);  // Cancella il timeout se la risposta arriva in tempo
            resolve(response);
          })
          .catch(err => {
            clearTimeout(timer);  // Cancella il timeout anche in caso di errore
            reject(err);
          });
      });
    };

  const originalFetch = window.fetch;
  window.fetch = async function(url, options) {
       // Carica la configurazione se non è stata ancora caricata
      if (url.includes('env-config.json') == false && !config.basePath && !config.loaded) {
        await loadConfig();
        config.loaded = true;  
      }
   
    if (url.includes('projects')) {
      
      url = encodeQueryString(url);
      console.log(options);
      // Verifica che 'options' e 'headers' esistano
      if (options && options.headers instanceof Headers) {
        // Controlla se l'header Authorization esiste
        if (options.headers.has('Authorization')) {
            let authHeader = options.headers.get('Authorization');
            // Aggiungi 'Bearer ' se non è già presente
            if (authHeader.startsWith('Bearer Bearer ')) {
                authHeader = authHeader.replace('Bearer ', '');
                options.headers.set('Authorization', authHeader);
            }

            if (!authHeader.startsWith('Bearer ')) {
                options.headers.set('Authorization', 'Bearer ' + authHeader);
            }
            console.log(options.headers.get('Authorization'));
        }
    }
    }
      //console.log(url);
    
    // if (options.headers && options.headers['Authorization']) {
    //   if (!options.headers['Authorization'].startsWith('Bearer ')) {
    //     options.headers['Authorization'] = 'Bearer ' + options.headers['Authorization'];
    //   }
    // }
    // else
    // {
    //   console.log('WRONG FETCH');
    //   console.log(url);
    // }
    return fetchWithTimeout(url, options);
    //return originalFetch(url, options);
  };

  const originalXhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    if (url.includes('projects')) {
      url = encodeQueryString(url);
      console.log(url);
    }
    else 
    {
      console.log('WRONG FETCH');
      console.log(url);
    }
    return originalXhrOpen.apply(this, arguments);
  };

})();

