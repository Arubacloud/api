---
id: versioning
sidebar_position: 8
sidebar_label: API Versioning
title: API Versioning
---

## Introduzione

Per garantire la compatibilità retroattiva e consentire aggiornamenti senza interruzioni, utilizziamo un sistema di **versioning delle API**. Le versioni delle API sono specificate tramite il parametro della query string `api-version`.

Includendo la versione nella richiesta, i client possono assicurarsi di utilizzare una versione specifica dell'API, consentendo un'integrazione stabile anche quando vengono rilasciate nuove versioni.

## Formato del Versioning

La versione dell'API viene passata utilizzando il parametro di query `api-version` nell'URL. Ad esempio:

Example:
```
https://api.example.com/resource?api-version=1.1
```

In questo esempio, il client sta richiedendo la versione `1.1` dell'API.

### Struttura del Parametro di Query

- **Nome del parametro**: `api-version`
- **Formato della versione**: `<major>.<minor>`
  - `major`: Un cambiamento radicale o un aggiornamento significativo (es. nuove funzionalità, comportamento modificato).
  - `minor`: Modifiche retrocompatibili, come correzioni di bug o miglioramenti minori.


### Esempi di Richieste

#### Richiesta con la versione 1.0 dell'API

Example:
```
GET https://api.example.com/resource?api-version=1.0
```

## Compatibilità tra Versioni

Ogni nuova versione dell'API è progettata per essere retrocompatibile quando vengono apportate solo modifiche minori (ad esempio, da `1.0` a `1.1`). Tuttavia, quando cambia la versione principale (ad esempio, da `1.x` a `2.x`), potrebbero essere introdotti cambiamenti non compatibili.

Si raccomanda di specificare sempre la versione da cui dipende la tua applicazione per evitare comportamenti imprevisti quando vengono apportati aggiornamenti.

## Politica di Deprecazione

Le versioni più vecchie dell'API potrebbero eventualmente essere deprecate. Quando una versione viene deprecata:
- I client verranno informati in anticipo.
- Sarà previsto un periodo di tolleranza, durante il quale la versione deprecata sarà ancora accessibile.
- Dopo il periodo di tolleranza, la versione deprecata non sarà più supportata né accessibile.

Assicurati di monitorare le note di rilascio dell'API e di aggiornare le tue integrazioni per restare compatibile con le versioni più recenti.

## Best Practices

1. **Specifica sempre la versione**: Includi sempre il parametro `api-version` per evitare cambiamenti imprevisti e non compatibili.
2. **Testa le versioni più recenti**: Esegui test regolari con le versioni più nuove dell'API, specialmente quelle con aggiornamenti minori, per approfittare dei miglioramenti e delle correzioni.
3. **Monitora le deprecazioni**: Rimani informato sulle versioni deprecate e aggiorna il tuo client di conseguenza.

## Conclusione

Il versioning tramite il parametro di query `api-version` fornisce un modo flessibile per gestire gli aggiornamenti e garantire la stabilità dell'API nel tempo. Seguendo queste linee guida, potrai mantenere un'integrazione affidabile con le nostre API man mano che evolvono.