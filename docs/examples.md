---
id: example
sidebar_position: 2
sidebar_label: Examples and Use cases
title: Examples and Use cases
description: ""
hide_title: true
hide_table_of_contents: true
sidebar_class_name: "post api-method"
---

# Examples and Use Cases

## Introduction

This document provides examples and use cases for working with APIs.

## Postman Collection

Download the following collection:

- [Postman Collection](/assets/Aruba_Cloud_IaC.postman_collection.json)

**Steps:**

1. All you have to do is import the collection to Postman.
   - Boot Postman
   - Click 'Import' button in top left
   - Copy/Paste or Drag and drop the downloaded file

2. Click on the Collection, select the `Variables` Tab and set the `client_id` and `client_secret` variables with the `api_key` and `api_secret`.

3. Before calling any API, make an Auth request using the `Get Client Credential Access Token` API in `00-Autentication` section. This request will set the variable `api_access_token` which is already present in the authorization header of each API.

4. Get started!


## Examples

Please note that in the following examples, placeholders will be used. These placeholders are meant to be replaced with actual values according to your specific configuration or requirements.
### First Steps

#### 1. Project Creation (Optional)

By default, every account has an existing project that can be used to group and manage resources. If you'd like to create a new project, you can do so via the API.

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

#### 2. VPC Creation

Once you have a project, the next step is to create a Virtual Private Cloud (VPC) where you will manage network resources.


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

Subnets allow you to divide your VPC into smaller networks for better resource management and security isolation.

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

A security group acts as a virtual firewall that controls the traffic for your resources

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

## Cloud Server Creation


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


## KaaS
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