---
id: metadata
sidebar_position: 7
sidebar_label: Metadata and Properties
title: Metadata and Properies
---
## Introduzione
Questa sezione contiene le informazioni relative ai metadati e alle properties delle risorse del cloud. 
Per gestire appropriatamente le risorse cloud leggi attentamente la documentazione.
Ogni risorsa contiene una sezione 'metadata' ed una 'properties'.


## Metadata
I metadata sono comuni a tutte le risorse e contengono i seguenti campi:
- name: Nome della risorsa
- location: Nome della region ove sarà allocata la risorsa.
            Attualmente le region disponibili sono: 
            ITBG-Bergamo
- tags: Lista di tag per la risorsa
## Properties 
Le properties sono quei dati specifici per ogni risorsa, necessarie alla gestione della stessa.
Di seguito è presente un elenco di alcune proprietà relative alle risorse specifiche:

## CloudServer
### Cloud Server BootVolume
Prima di creare un cloud server, è necessario creare un volume utilizzando l’apposita [API](/docs/documents/storage/create-block-storage) di creazione volume. Questo passaggio è indispensabile per associare correttamente lo storage al server durante il processo di provisioning.

Il volume deve essere creato con il campo bootable impostato su true, e il campo image deve contenere uno dei valori consentiti elencati nella tabella sottostante. Assicurati che il volume sia stato creato correttamente e risulti disponibile prima di procedere con la richiesta di creazione del server.
Lista dei possibili valori:

| Name              |Description             | Compatible Flavors |
| :---:             | :---:                  | :---:
| alma8             |alma 8 64bit            | Linux Flavor      |
| DE11-001          |debian 11 64bit         | Linux Flavor      |
| osuse15_2_x64_1_0 |opensuse 15 64bit       | Linux Flavor      |
| alma9             |alma 9 64bit            | Linux Flavor      |
| WS19-001_W2K19_1_0|Windows 2019            | Windows Flavor    |
| DE12-001          |debian 12 64bit         | Linux Flavor      |
| LU22-001          |ubuntu 22 64bit         | Linux Flavor      |
| WS22-001_W2K22_1_0|Windows 2022            | Windows Flavor    |
| LU20-001          |ubuntu 20 64bit         | Linux Flavor      |
| LU24-001          |ubuntu 24 64bit         | Linux Flavor      |

### CloudServer Flavors
Lista delle taglie possibili per i CloudServer. **È necessario utilizzare il nome nel body dell'API**:

### Cloud Server Linux

|Name | CPU   | Ram (GB) |
| :---| :---: | :---:    |
|CSO4A8  |   4  |   8    |
|CSO8A16 |   8  |   16   |
|CSO12A24|   12 |   24   |
|CSO16A32|   16 |   32   |
|CSO24A48|   24 |   48   |
|CSO32A64|   32 |   64   |
|CSO1A4  |   1  |   4    |
|CSO2A8  |   2  |   8    |
|CSO4A16 |   4  |   16   |
|CSO8A32 |   8  |   32   |
|CSO16A64|   16 |   64   |
|CSO1A2  |   1  |   2    |
|CSO2A4  |   2  |   4    |

### Cloud Server Windows

|Name | CPU   | Ram (GB) |
| :---| :---: | :---:    |
|CSO12A24  |  12 |    24 |
|CSO16A32  |  16 |    32 |
|CSO16A64  |  16 |    64 |
|CSO1A4    |  1  |    4  |
|CSO24A48  |  24 |    48 |
|CSO2A4    |  2  |    4  |
|CSO2A8    |  2  |    8  |
|CSO32A64  |  32 |    64 |
|CSO4A16   |  4  |    16 |
|CSO4A8    |  4  |    8  |
|CSO8A16   |  8  |    16 |
|CSO8A32   |  8  |    32 |




## KaaS

### KaaS Flavors
Lista delle taglie possibili dei nodi del KaaS: **È necessario utilizzare il nome nel body dell'API**


|Name | CPU   | Ram (GB) | Storage (GB) |
| :---| :---: | :---:    |  :---:       |
|K1A2   |  1   |   2    |    20         |
|K2A4   |  2   |   4    |    40        | 
|K4A8   |  4   |   8    |    80        | 
|K8A16  |  8   |   16   |    120        |
|K1A4R  |  1   |   4    |    40        | 
|K2A8R  |  2   |   8    |    80        | 
|K4A16R  | 4   |   16   |    120        |
|K12A24  | 12  |   24   |    120        |
|K16A32  | 16  |   32   |    120        |
|K24A48  | 24  |   48   |    120        |
|K32A64  | 32  |   64   |    120        |
|K8A32R  | 8   |   32   |   120        | 


### Kubernetes Version

Per creare un KaaS è necessario specificare la versione di Kubernetes.
Attualmente le versioni di kubernetes disponibili sono le seguenti: 

| Version |
| :---    |
| 1.31.3  |
| 1.32.3  |
| 1.33.2  |

## DBaaS

### DBaaS Engines

Lista delle taglie possibili per DBaaS. **È necessario utilizzare il nome del flavor nel body dell'API**

<table>
  <thead>
    <tr>
      <th>Engine type</th>
      <th>Version</th>
      <th>Edition</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MySQL</td>
      <td>8.0</td>
      <td></td>
      <td>mysql-8.0</td>
    </tr>
    <tr>
      <td>Microsoft SQL Server</td>
      <td>2022</td>
      <td>Web</td>
      <td>mssql-2022-web</td>
    </tr>
    <tr>
      <td>Microsoft SQL Server</td>
      <td>2022</td>
      <td>Standard</td>
      <td>mssql-2022-standard</td>
    </tr>
    <tr>
      <td>Microsoft SQL Server</td>
      <td>2022</td>
      <td>Enterprise</td>
      <td>mssql-2022-enterprise</td>
    </tr>
  </tbody>
</table>

### DBaaS Flavors
Lista degli engines disponibili per DBaaS. **È necessario utilizzare il nome nel body dell'AP**
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>CPU</th>
      <th>RAM (GB)</th>
      <th>Engine compatibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DBO1A2</td>
      <td>1</td>
      <td>2</td>
      <td rowspan="4">
        <ul>
          <li>mysql-8.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DBO1A4</td>
      <td>1</td>
      <td>4</td>
    </tr>
    <tr>
      <td>DBO2A4</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>DBO2A8</td>
      <td>2</td>
      <td>8</td>
    </tr>
    <tr>
      <td>DBO4A8</td>
      <td>4</td>
      <td>8</td>
      <td rowspan="2">
        <ul>
          <li>mysql-8.0</li>
          <li>mssql-2022-web</li>
          <li>mssql-2022-standard</li>
          <li>mssql-2022-enterprise</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DBO4A16</td>
      <td>4</td>
      <td>16</td>
    </tr>
    <tr>
      <td>DBO8A16</td>
      <td>8</td>
      <td>16</td>
      <td rowspan="4">
        <ul>
          <li>mysql-8.0</li>
          <li>mssql-2022-enterprise</li>
        </ul>
      </td>	  
    </tr>
    <tr>
      <td>DBO8A32</td>
      <td>8</td>
      <td>32</td>
    </tr>
    <tr>
      <td>DBO12A24</td>
      <td>12</td>
      <td>24</td>
    </tr>
    <tr>
      <td>DBO16A32</td>
      <td>16</td>
      <td>32</td>
    </tr>
    <tr>
      <td>DBO16A64</td>
      <td>16</td>
      <td>64</td>
      <td rowspan="3">
        <ul>
          <li>mysql-8.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DBO24A48</td>
      <td>24</td>
      <td>48</td>
    </tr>
    <tr>
      <td>DBO32A64</td>
      <td>32</td>
      <td>64</td>
    </tr>
  </tbody>
</table>





## Location and Data Center

Per creare una qualunque risorsa della CMP è necessario specificare Location e Data Center di riferimento.

Di seguito l'elenco dei possibili valori:

| Location     | DataCenter |
| :---         | :---:      |
| ITBG-Bergamo |   ITBG-1   |
| ITBG-Bergamo |   ITBG-2   |
| ITBG-Bergamo |   ITBG-3   |

:::caution
Per le risorse 'figlie' come ad esempio SecurityGroup (figlia della risorsa vpc) non è necessario specificare la location, poichè verrà creata nella stessa location della risorsa 'padre'
:::
:::danger
Attenzione, una volta creata la risorsa in una specifica location non è possibile cambiarla.
:::

## Schedule

L'API consente la creazione di un job schedulato, ovvero un'attività pianificata da eseguire automaticamente secondo una determinata configurazione temporale.

Di seguito sono descritte le proprietà principali del body della richiesta:

- **scheduleJobType** (string)
Tipo di schedulazione del job. 
I valori possibili possono includere:
 - "OneShot": il job verrà eseguito una sola volta, nella data e ora     specificata.
 - "Recurring": il job verrà eseguito periodicamente, secondo la regola cron specificata (vedi cron).
  > Example: `"OneShot"`

- **scheduleAt** (string, ISO 8601 format)
Data e ora di inizio schedulazione del job. Se scheduleJobType è "OneShot", rappresenta il momento esatto in cui il job verrà eseguito.
Nel caso di job ricorrenti ("Recurring"), rappresenta l’inizio della validità della schedulazione.
  > Example: "2024-07-29T15:51:28.071Z"

- **executeUntil** (string, ISO 8601 format)
Data e ora di fine validità della schedulazione del job. Il job non verrà eseguito oltre questo limite.
È particolarmente rilevante per i job ricorrenti, per limitare il periodo di esecuzione.
  > Example: "2024-07-29T15:51:28.071Z"

- **cron** (string)
Espressione cron che definisce la frequenza di esecuzione del job, nel caso di scheduleJobType impostato su "Recurring".
Se il job è di tipo "OneShot", questo campo può essere ignorato o lasciato vuoto.

  > Example: "0 0 * * *" (esegue il job ogni giorno a mezzanotte)

### Schedule Steps
Definisce la sequenza di azioni che compongono l'esecuzione del job.

:::caution
  Anche se steps è un array (per garantire estendibilità futura), attualmente è permesso un solo step per job.
:::
Ogni step rappresenta una singola azione da eseguire su una risorsa specifica, tramite un metodo HTTP definito. L’azione deve rispettare la struttura e i valori supportati indicati di seguito.


| Field         | Type           | Description              |
| ------------- | -------------- |------------------------- |
| `name`        | string         | Nome descrittivo dello step. |
| `resourceUri` | string         | URI della risorsa su cui eseguire l'azione. |
| `actionUri`   | string         | URI o identificatore dell’azione da eseguire. **Attualmente sono supportati** solo `"poweron"` e `"poweroff"` |
| `httpVerb`    | string         | Metodo HTTP utilizzato per l’azione. **Attualmente è consentito solo**  `"POST"`.|
| `body`        | object or null | Corpo della richiesta. Deve essere `null` per le azioni supportate.                                                 |
