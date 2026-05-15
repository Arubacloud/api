---
id: filters 
sidebar_position: 5
sidebar_label: Filtri
title: Filtri
---

# Filtri

## Introduzione

Il filtro è una potente funzionalità delle API che consente ai client di restringere i risultati delle query in base a criteri specifici. Questa guida illustra le procedure consigliate e i dettagli di implementazione per la progettazione di un meccanismo di filtro flessibile ed efficiente nell'API.

## Concetti chiave

1. **Parametri di query**: utilizzare i parametri di query per specificare i filtri nelle richieste API.
2. **Operatori di filtro**: supporta vari operatori (ad esempio, uguale a, diverso da, maggiore di, minore di) per ogni criterio di filtro.

## Parametri API

### 1. Filtri di base

È necessario specificare un filtro come segue:

- `filter=<field>:<operator>(<arguments>)`

Un campo è la chiave della risorsa da filtrare specificata con la notazione del punto (ad esempio, user.id). È possibile specificare più filtri impostando più parametri di filtro, come illustrato nell'esempio seguente:

- `filter=<field1>:<operator1>(<arguments>),filter=<field2>:<operator2>(<arguments>)`

In alternativa, è possibile specificare più campi in una singola definizione di filtro separati da ';', che considererà più criteri di filtro come un AND logico:

- `filter=<field1>:<operator1>(<arguments>);<field2>:<operator2>(<arguments>)`

Il tipo di valore dell'argomento e il tipo di valore del campo devono essere uguali. I valori stringa devono essere racchiusi tra virgolette doppie ('"').

### 2. Operatori di Filtro con i relativi parametri Filter Operators with Relative Arguments

- **Equality**: `eq:(<argument>)`
- **Inequality**: `ne:(<argument>)`
- **Existence**: `exists:(<argument>)`
- **Greater than equal**: `gte:(<argument>)`
- **Greater than**: `gt:(<argument>)`
- **Less than equal**: `lte:(<argument>)`
- **Less than**: `lt:(<argument>)`
- **In range**: `in:([<arg1>,...])`
- **Not in range**: `nin:([<arg1>,...])`
- **Between values**: `between:([<arg1>,<arg2>])`

## Queri di Esempio

1. Filtrare gli utenti con id tra 1000 e 1200:
```
filter=user.id:between([1000, 1200])
```
2. Filtrare gli utenti con id specifici:
```
filter=user.id:in([100, 105, 145])
```

3. Filtrare gli utentu per nome:
```
filter=user.name:eq(“Andrew”)
```