---
id: pagination
sidebar_position: 6
sidebar_label: Paginazione
title: Pagination
---

# Paginazione

## Introduzione

La paginazione è una funzionalità cruciale per qualsiasi API che si occupa di grandi set di dati. Ti consente di suddividere i dati in blocchi gestibili e di navigarli in modo efficiente. Questa guida illustra le procedure consigliate e i dettagli di implementazione per l'utilizzo corretto della paginazione.

## Parametri API

###  Limit and Offset

La forma più semplice di impaginazione in cui limit specifica il numero di record per pagina e offset specifica il punto iniziale.
- `limit`: numero di record da restituire per pagina
- `offset`: numero di record da ignorare prima di iniziare a raccogliere il set di risultati

Esempio:
```
GET /items?limit=10&offset=20
```


## Struttura Response

La risposta all'impaginazione include:

- **Valori**: l'array di elementi per la pagina corrente.
- **Link**: URL alla pagina precedente e a quella successiva.

Quando si esegue una query con l'impaginazione, la risposta include la struttura seguente:


```json
{
    "totalCount": 0,
    "self": "string",
    "prev": "string",
    "next": "string",
    "first": "string",
    "last": "string"
}
```
## Campi

- **totalCount**: (intero) Il numero totale di elementi disponibili.
  - **Esempio**: 150

- **self**: (stringa) L'URL della pagina corrente dei risultati.
  - **Esempio**: "/api/items?offset=25&limit=25"

- **prev**: (stringa) L'URL della pagina precedente dei risultati. Se non è presente alcuna pagina precedente, questo campo sarà nullo o una stringa vuota.
  - **Esempio**: "/api/items?offset=0&limit=25"

- **next**: (stringa) L'URL della pagina successiva dei risultati. Se non è presente una pagina successiva, questo campo sarà null o una stringa vuota.
  - **Esempio**: "/api/items?offset=50&limit=25"

- **first**: (stringa) L'URL della prima pagina dei risultati.
  - **Esempio**: "/api/items?offset=0&limit=25"

- **last**: (stringa) L'URL dell'ultima pagina dei risultati.
  - **Esempio**: "/api/items?offset=125&limit=25"

### Esempio
```json
{
    "totalCount": 150,
    "self": "/api/items?offset=25&limit=25",
    "prev": "/api/items?offset=0&limit=25",
    "next": "/api/items?offset=50&limit=25",
    "first": "/api/items?offset=0&limit=25",
    "last": "/api/items?offset=125&limit=25"
}
```

