---
id: example
sidebar_position: 2
sidebar_label: Esempi e Casi d'uso
title: Esempi e Casi d'uso
description: ""
hide_title: true
hide_table_of_contents: true
sidebar_class_name: "post api-method"
---

# Esempi e Casi d'uso

## Introduzione

Il documento contiene una collection postman con degli esempi per l'utilizzo delle API della CMP

## Postman Collection

Scarica la seguente collezione Postman:

- [Postman Collection](/assets/Aruba_Cloud_IaC.postman_collection.json)

**Procedura:**

1. Tutto ciò che bisogna fare è importare la collection su Postman
   - Avvia Postman
   - Click 'Import' in alto a sinistra
   - Copia/incolla o trascina il file scaricato

2. Click sulla collezione, seleziona la tab `Variables` e imposta le variabili `client_id` e `client_secret` con l' `api_key` e l'`api_secret`.
3. Prima di effettuare una qualunque chiamata API,effettua una richiesta di Autenticazione usando l'API  `Get Client Credential Access Token` nella sezione `00-Autentication`. Questo imposterà la variabile `api_access_token` che è già presente nell'header Autorization di ogni API.
4. Inizia ad utilizzare le API!



## Esempi

Si prega di notare che negli esempi che seguiranno verranno utilizzati dei segnaposto. Questi segnaposto devono essere sostituiti con valori reali in base alla tua configurazione o alle tue esigenze specifiche.

### Primi Passi

#### 1. Creazione Project (Optional)

Per impostazione predefinita, ogni account ha un progetto esistente che può essere utilizzato per raggruppare e gestire le risorse. Se desideri creare un nuovo progetto, puoi farlo tramite l'API

```https://api.arubacloud.com/projects```

``` body
{
  "metadata": {
    "name": "project-test-1",
    "tags": [
      "string"
    ]
  },
  "properties": {
    "description": "string",
    "default": false
  }

}
```

#### 2. Creatione VPC

Una volta creato un progetto, il passo successivo è creare una Virtual Private Cloud (VPC) dove gestirai le risorse di rete.


```https://api.arubacloud.com/projects/:projectId/providers/Aruba.Network/vpcs```
``` body
{
   "metadata":{
      "name":"vpc-test-1",
      "tags":[
         "tag-1",
         "tag-2"
      ],
      "location": {
        "value": "ITBG-Bergamo"
       }
   }
}
```

#### 3. Subnet and Security Group

Le subnet ti permettono di suddividere la tua VPC in reti più piccole per una migliore gestione delle risorse e un'isolamento della sicurezza più efficace.

```https://api.arubacloud.com/projects/:projectId/providers/Aruba.Network/vpcs/:vpcId/subnets```

``` body
{
   "metadata":{
      "name":"subnet-api-1",
      "tags":[
         "tag-1",
         "tag-2"
      ]
   },
   "properties":{
      "type":"Advanced",
      "default":true,
      "network":{
         "address":"192.168.1.0/25"
      },
      "dhcp":{
         "enabled":true         
      }
   }
}
```

Un security group funge da firewall virtuale che controlla il traffico per le tue risorse.

```https://api.arubacloud.com/projects/:projectId/providers/Aruba.Network/vpcs/:vpcId/securityGroups```
``` body
{
   "metadata":{
      "name":"sg-test-1",
      "tags":[
         "tag-1",
         "tag-2"
      ],
      "location":{
        "value":"ITBG-Bergamo"
      }
   },
   "properties":{
      "default":false     
   }
}
```

## Creazione Cloud Server 


```https://api.arubacloud.com/projects/:projectId/providers/Aruba.Compute/cloudServers?api-version=1.1```

``` body
{
    "metadata": {
        "name": "cloud-server-1-win-vpcpreset-api",
        "location": {
            "value": "ITBG-Bergamo"
        },
        "tags": [
            "tag-1"
        ]
    },
    "properties": {
        "dataCenter": "ITBG-1",
        "vpcPreset": true,
        "flavorId": "b5052a43-60d0-4041-9d5d-448d30c48f0c",
        "template": {
            "uri": "/providers/Aruba.Compute/templates/65f42d72d82fd1d45ce03b0a"
        },
        "addElasticIp": true
    }
} 
```


## Creazione KaaS
```https://api.arubacloud.com/projects/:projectId/providers/Aruba.Container/kaas```
```
{
    "metadata": {
        "name": "kaas-test-1",
        "location": {
            "value": "ITBG-Bergamo"
        },
        "tags": [
            "tag1"
        ]
    },
    "properties": {
        "preset": false,
        "vpc": {
            "uri": "/projects/{{projectIdCreated}}/providers/Aruba.Network/vpcs/{{vpcIdCreated}}"
        },
        "kubernetesVersion": {
            "value": "1.29.2"
        },
        "subnet": {
            "uri": "/projects/{{projectIdCreated}}/providers/Aruba.Network/vpcs/{{vpcIdCreated}}/subnets/{{subnetIdCreated}}"
        },
        "nodeCidr": {
            "address": "192.168.59.0/25",
            "name": "kaas-test-cidr"
        },
        "securityGroup": {
            "name": "kaas-test-sg"
        },
        "nodePools": [
            {
                "name": "nd-1",
                "nodes": 1,
                "instance": "K2A4",
                "dataCenter": "ITBG-1"
            }
        ],
        "ha": false,
        "billingPlan": {
            "billingPeriod": "Hour"
        }
    }
}
```