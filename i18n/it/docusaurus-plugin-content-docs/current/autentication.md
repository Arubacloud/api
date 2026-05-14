---
id: authentication
sidebar_position: 2
sidebar_label: Autenticazione
title: Autenticazione
description: "Client Credentials"
hide_title: true
hide_table_of_contents: true
sidebar_class_name: "post api-method"
---

# Autenticazione

## Introduzione

Questo documento fornisce una guida per il processo di autenticazione che utilizza il flusso OAuth. È fondamentale notare che ogni client deve essere pre-registrato con un `client_id` e un `client_secret`. Senza queste credenziali, il processo di autenticazione non funzionerà correttamente.

## Registrazione Client

Prima di avviare il processo di autenticazione, è necessario registrare ogni client coinvolto. Questa registrazione comporta l'assegnazione di un `client_id` e un `client_secret` univoci per identificare in modo sicuro ogni client.

**Procedura:**
1. Accedere alla [Nuova Aruba Cloud Management Platform](https://my.arubacloud.com), accedere alla sezione API e generare una nuova credenziale.
  
  a. Nel menu a sinistra, seleziona "Chiavi API"

![menu](/img/auth/Menu.PNG)

   b. Fai clic sul pulsante "Crea chiave API" in alto a destra

![menu](/img/auth/Create_start.PNG)

  c. Segui la procedura guidata per creare una nuova chiave API e assicurati di copiare il l'API secret perché non ti verrà più mostrato.

![menu](/img/auth/Create.PNG)
2. Salvare queste credenziali per un uso successivo durante l'autenticazione. La coppia `api_key` e `api_secret` è associata all'utente. Questa operazione è necessaria per richiamare l'API Aruba tramite le credenziali del client OAuth2.

:::info 
 La coppia `api_key` e `api_secret` viene utilizzata nel flusso di autenticazione come `client_id` e `client_secret`
:::
## OAuth Authentication Flow

Il flusso di autenticazione è progettato per eseguire rapidamente i test. Questo processo prevede la generazione di token di accesso e aggiornamento per l'utente di test utilizzando i token `client_id` e un `client_secret` registrati. (vedi step precedente)

:::info 
FQDN per ottenere il token 
 https://mylogin.aruba.it/auth/realms/cmp-new-apikey/protocol/openid-connect/token
:::

**Procedura:**

1. Eseguire una chiamata OAuth per ottenere il token di accesso
2. Utilizzare il `client_id` e il `client_secret` registrati come parte dell'autenticazione.
3. Archiviare i token di accesso per un uso successivo.

Per fini di sviluppo, è possibile utilizzare la seguente collection postman con il relativo environment:

- [Postman Collection](/assets/B2B_Authentication.postman_collection.json)

Impostazione variabili di ambiente:

| Variable        | Description | 
| --------------- | ------------------------------------------------------|
| client_id       |  Il client_id fornito da Aruba (api_key)                       |                                                        |
| client_secret   |  Il client_secret fornito da    Aruba   (api_secret)                 |                                                        |


:::caution
Per utilizzare l'access token inserire nel campo 'Authorization'  il valore 'Bearer \{token\}'
:::

### Esempio di cURL
```bash
curl -X POST https://mylogin.aruba.it/auth/realms/cmp-new-apikey/protocol/openid-connect/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" 
     
```
### Esempio per Windows PowerShell
```powershell
$tokenUrl = " https://mylogin.aruba.it/auth/realms/cmp-new-apikey/protocol/openid-connect/token"
$clientId = "YOUR_CLIENT_ID"
$clientSecret = "YOUR_CLIENT_SECRET"
$body = @{
    grant_type    = "client_credentials"
    client_id     = $clientId
    client_secret = $clientSecret
}
$response = Invoke-RestMethod -Method Post -Uri $tokenUrl -ContentType "application/x-www-form-urlencoded" -Body $body
$accessToken = $response.access_token
Write-Host "Access Token: $accessToken"
```
## Conclusioni

Seguendo attentamente questi passaggi, sarà possibile implementare con successo il processo di autenticazione OAuth. Ricordati sempre di registrare ogni client con le credenziali necessarie per il corretto funzionamento del processo.