---
id: errors
sidebar_position: 3
sidebar_label: Errori
title: Errori
---

# Errori

Questo documento descrive gli errori restituiti dalle nostre API, formattati come ProblemDetails o ValidationProblemDetails.

## Formato ProblemDetails 

The `ProblemDetails` object contains the following properties:

- `type` (stringa): un riferimento URI che identifica il tipo di problema. Questo URI deve fornire una documentazione leggibile per il problema quando viene dereferenziato.
- `title` (stringa): un breve riassunto leggibile del tipo di problema. Non deve cambiare da un'occorrenza all'altra del problema, tranne che per scopi di localizzazione.
- `status` (numero intero): lo stato HTTP
- `instance` (stringa): un riferimento URI che identifica l'occorrenza specifica del problema. Può o non può fornire ulteriori informazioni se dereferenziato.
- `extensions` (object): un dizionario di dettagli aggiuntivi sull'errore.


## Formato ValidationProblemDetails 

L'oggetto `ValidationProblemDetails` estende `ProblemDetails` e contiene le seguenti proprietà aggiuntive:

- `errors` (object): un dizionario in cui le chiavi sono i nomi dei parametri non validi e i valori sono array di messaggi di errore associati a tali parametri.

## Errori API comuni

### 400 Bad Request

#### Errori di Validazione

```json
{
  "type": "https://httpstatuses.io/400",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "instance": "projects/:projectId/providers/Aruba.Container/kaas",
  "errors": [ {
            "field": "Name",
            "message": "Location Value: string not found."
  }]
}
```

#### Bad Request

```json
{
  "type": "https://httpstatuses.io/400",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request could not be understood or was missing required parameters.",
  "instance": "projects/:projectId/providers/Aruba.Container/kaas"
}
```






### 403 Forbidden

```json
{
  "type": "https://httpstatuses.io/403",
  "title": "Forbidden",
  "status": 403,
  "detail": "User is not authorized to perform the operation on the resource.",
  "instance": "projects/:projectId/providers/Aruba.Container/kaas"
}
```
### 500 Internal Server Error

```json
{
  "type": "https://httpstatuses.io/500",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred on the server.",
  "instance": "projects/:projectId/providers/Aruba.Container/kaas"
}
```