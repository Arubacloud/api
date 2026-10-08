---
id: ai-authentication
sidebar_position: 2
sidebar_label: Authentication
title: AI Platform Authentication
description: "Client Credentials"
hide_title: true
hide_table_of_contents: true
sidebar_class_name: "post api-method"
---

# Authentication

## Introduction

This guide explains the AIPlatform authentication process. Each client must be pre-registered with a `api_key` and `api_secret` —without these credentials, the authentication will not work.

## Client Registration
Before starting the authentication process, each client must be registered and assigned a unique `api_key` and `api_secret` for secure identification.

**Steps:**

1. Sign in into the [New Aruba Cloud Management Platform](https://my.arubacloud.com), navigate to API section, and generate a new credential.
  
  a. In the sidebarmenu menu, select 'AI Platform' and 'Go to Service'
  b. Click on the 'Create Client Credential AI' button 
  c. Follow the wizard to create a new api key, and be sure to copy the API Secret as it will only be shown once.
2. Securely store your API key and secret for future use during authentication. The `api_key` and `api_secret` are tied to your user account and are required to access the Aruba API using the OAuth2 Client Credentials flow.


## OAuth Authentication Flow

The authentication flow is designed for quick and efficient testing. It involves generating an access token for the test user using the registered `api_key` and `api_secret`. (see the previus step)

:::info 
The FQDN for generating the token is 
 https://mylogin.aruba.it/auth/realms/cmp-new-apikey-ai/protocol/openid-connect/token
:::
**Steps:**

1. Execute an OAuth request to obtain an access token
2. Provide the registered `client_id` (`api_key`) and `client_secret` (`api_secret`) as part of the authentication.
3. Store the access token for future use.

:::caution 
 To use the access token, enter the value 'Bearer \{token\}' in the 'Authorization' field
:::

### cURL Command Example
```bash
curl -X POST https://mylogin.aruba.it/auth/realms/cmp-new-apikey-ai/protocol/openid-connect/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" 
```


### Windows PowerShell Example
```powershell
$tokenUrl = " https:/mylogin.aruba.it/auth/realms/cmp-new-apikey-ai/protocol/openid-connect/token"
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


## Conclusions
By following these steps, you can successfully implement the authentication process. Remember to register each client with the required credentials to ensure the process works correctly.