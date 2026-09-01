(function() {

  let config = {};
  const requiresPath = ['projects', 'providers', 'catalog'];
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
        console.log('Il file di configurazione non esiste. Utilizzo l\'URL predefinito.');
      }
    } catch (error) {
      console.error(error);
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

  const originalFetch = window.fetch;
  window.fetch = async function(url, options) {
       // Carica la configurazione se non è stata ancora caricata
      if (url.includes('env-config.json') == false && !config.basePath && !config.loaded) {
        await loadConfig();
        config.loaded = true;  
      }
    
    if (requiresPath.some(segment => url.includes(segment))) {
      
      url = encodeQueryString(url);
      
      // Verifica che 'options' e 'headers' esistano
      if (options && options.headers instanceof Headers) {
        // Controlla se l'header Authorization esiste
        if (options.headers.has('Authorization')) {
            let authHeader = options.headers.get('Authorization');
            if (authHeader.startsWith('Bearer Bearer ')) {
                authHeader = authHeader.replace('Bearer ', '');
                options.headers.set('Authorization', authHeader);
            }
            if (!authHeader.startsWith('Bearer ')) {
                options.headers.set('Authorization', 'Bearer ' + authHeader);
            }
            
        }
      }
    }
    return originalFetch(url, options);
  };

  const originalXhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    if (requiresPath.some(segment => url.includes(segment))) {
      url = encodeQueryString(url);
    }
    else 
    {
      console.log(url);
    }
    return originalXhrOpen.apply(this, arguments);
  };

})();

